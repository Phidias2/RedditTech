import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  StatusBar,
} from 'react-native';
import axios from 'axios';
import { Searchbar } from 'react-native-paper';
import { Icon, Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

function Search() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const [SubReddit, setSubReddit] = useState({ all: null });

  const options = {
    method: 'GET',
    url: `https://www.reddit.com/r/subreddit/search.json?q=${searchQuery}`,
  };

  axios
    .request(options)
    .then((res) => {
      console.log(res.data);
      // console.log(Object.keys(res.data.data.children[0].data));
      setSubReddit({ all: res.data })
    })
    .catch(function (error) {
      setSubReddit({ all: null });
      console.error(error);
    });

  const { navigate } = useNavigation();
  return (
    <View>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {!SubReddit.all ? (
        <View ></View>
      ) : (
        SubReddit.all.data.children.map((item, index) => {
          return (
            <View>
              <Card>
                <View key={index}
                  style={{
                    position: 'relative',
                  }}>
                  <Pressable
                    onPress={() => {
                      navigate('Subreddit');
                      global.SubRedditName = item.data.subreddit;
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                      <View>

                      </View>
                      <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.title}>
                          {!SubReddit.all
                            ? 'Loading'
                            : item.data.subreddit_name_prefixed}
                        </Text>
                        <Text style={styles.second}>
                          {!SubReddit.all ? 'Loading' : item.data.author} ○{' '}
                          {!SubReddit.all ? 'Loading' : item.data.created}
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                  <View
                    style={{
                      alignItems: 'center',
                    }}>
                    <Text style={styles.third}>
                      {!SubReddit.all ? 'Loading' : item.data.title}
                    </Text>
                    <Image
                      style={{
                        width: 320,
                        height: 280,
                        marginVertical: 10,
                      }}
                      resizeMode="cover"
                      source={{ uri: item.data.thumbnail }}
                    />
                    <View style={{ flexDirection: 'row' }}>
                      <Icon name="arrow-circle-up" color="#000000" size={20} />
                      <Text style={styles.fourth}>
                        {!SubReddit.all ? 'Loading' : item.data.score}
                      </Text>
                      <Icon
                        name="arrow-circle-down"
                        color="#000000"
                        size={20}
                      />
                    </View>
                  </View>
                </View>
              </Card>
            </View>
          )
        })
      )
      }
    </View >
  )
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  second: {
    color: 'black',
    alignItems: 'center',
  },
  third: {
    color: 'black',
    alignItems: 'center',
    marginTop: 10,
  },
  fourth: {
    color: 'black',
    marginLeft: 5,
    marginRight: 5,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 63,
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
  },
});

export default Search;
