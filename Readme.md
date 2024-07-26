Reddit Clone

A Reddit clone built with React Native and Expo, allowing users to search and browse subreddits. The app makes requests to the Reddit API using Axios.
Features

    Search for subreddits
    Filter posts by top, rising, new, etc.
    Display subreddit posts

Installation                                                                                                                                                                                                                        

    Clone the repository:

    bash

git clone git@github.com:Phidias2/RedditTech.git

Navigate to the project directory:

cd reddittech

Install the dependencies:

bash

    npm install

Configuration

    Obtain a Reddit API client ID by registering your app on the Reddit website.

    Update the .env file in the project root with your Reddit API client ID:

    REDDIT_CLIENT_ID=your-client-id

Usage

    Start the development server:

    expo start

    Use the Expo app or an emulator to run the app on your device.

Technologies Used

    React Native
    Expo
    Axios

### NAVIGATION :

In our application we have a navbar composed by **Home**, **Profile** & **Search** button. The rest of the navigation is used in the App.js of the application like if you click on the subreddit name on post you will be redirected to the subreddit.

We are using stacks for naigation from **react-native-screens/native-stack**
```js
<Stack.Screen name="Search" component={Search} />
<Stack.Screen name="Settings" component={Settings} />
<Stack.Screen name="Connection" component={Connection} />
<Stack.Screen name="Subreddit" component={Subreddit} options={{
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }, headerStyle: { backgroundColor: '#ff4500' }
}} />

Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please submit an issue or a pull request.
License

This project is licensed under the MIT License.
Acknowledgments

    Expo
    React Native
    Reddit API

    Made by GBAGUIDI Phidias
