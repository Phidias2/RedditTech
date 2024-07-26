import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { enableScreens } from 'react-native-screens';
import Home from './components/Home';
import Connection from './components/Connection';
import Profile from './components/Profile';
import Search from './components/Search';
import Subreddit from './components/Subreddit';
import Settings from './components/Settings';


enableScreens();
const Stack = createNativeStackNavigator();
export default function App() {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();

  global.Token = null;
  global.Filter = 'best';
  global.FilterIcon = 'grade';
  global.SubRedditName = null;

  return (

    <NavigationContainer>
      <StatusBar backgroundColor="#ff4500" />
      <Stack.Navigator initialRouteName="Redditech">
        <Stack.Screen
          name="Redditech"
          component={Home}
          options={{
            title: 'Redditech',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#ff4500',
            },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerStyle: { backgroundColor: '#ff4500' },
          }}
        />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Connection" component={Connection} />
        <Stack.Screen
          name="Subreddit"
          component={Subreddit}
          options={{
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerStyle: {backgroundColor: '#ff4500'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
