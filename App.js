import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import { firebaseConfig } from './src/config/firebase';
import AuthNavigator from './src/screens/authnavigator/AuthNavigator';
import Home from './src/screens/home/Home';
firebase.initializeApp(firebaseConfig);
export default createAppContainer(
    createSwitchNavigator(
        {
            Auth: AuthNavigator,
            App: Home,
        },
        {
            initialRouteName: 'Auth'
        }
    )
);