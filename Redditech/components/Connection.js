import React, { useState, useEffect } from 'react';
// import { authorize } from 'react-native-app-auth';
import Auth from '../authWrapper';

// import { authorize } from 'react-native-app-auth';

const Connection = ({ navigation }) => {
    const [apiData, setApiData] = useState({
        token: null,
        tokenExpiration: null,
        refreshToken: null,
    });

    const config = {
        redirectUrl: 'com.redditech://oauth2redirect/reddit',
        clientId: 'aoB2twq_CoXj_h4xttyf4g',
        clientSecret: '', // empty string - needed for iOS
        scopes: ['identity'],
        serviceConfiguration: {
            authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize.compact',
            tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
        },
        customHeaders: {
            token: {
                Authorization: 'Basic YW9CMnR3cV9Db1hqX2g0eHR0eWY0Zw==',
            },
        },
    };

    // Log in to get an authentication token
    // const config = {
    //     redirectUrl: 'com.redditech://oauth2redirect/reddit',
    //     clientId: 'aoB2twq_CoXj_h4xttyf4g',
    //     scopes: [
    //         'identity',
    //         'edit',
    //         'subscribe',
    //         'save',
    //         'submit',
    //         'read',
    //         'modconfig',
    //         'account',
    //         'vote',
    //         'flair',
    //         'mysubreddits',
    //     ],
    //     serviceConfiguration: {
    //         authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize.compact',
    //         tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
    //     }
    //     // customHeaders: {
    //     //     token: {
    //     //         Authorization: 'Basic ZmNhZll0Nl9PaHJsUUVONk5UVHlVUQ==',
    //     //     },
    //     // },
    // };

    useEffect(() => {
        const auth = async () => {
            const authState = Auth.authorize(config)
            console.log(authState);
            // try {
            //     console.log(config);
            //     const authState = await authorize(config);
            //     console.log(authState);
            //     // const authState = await authorize(config);
            //     // console.log(authState);
            //     // setApiData({
            //     //     token: authState.accessToken,
            //     //     tokenExpiration: authState.expiresIn,
            //     //     refreshToken: authState.refreshToken,
            //     // });
            //     // global.Token = authState.accessToken;
            //     // console.log(global.Token);
            //     // navigation.navigate('Profile', { screen: 'Home' });
            // } catch (error) {
            //     console.log(error);
            // }
        };

        auth();
    }, []);

    // useEffect(() => {
    //     if (global.Token) {
    //         navigation.navigate('Profile');
    //     }
    // }, [global.Token, navigation]);

    return <></>;
};

export default Connection;
