import React from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator } from 'react-navigation'

import {Home} from './src/screens/home'
import SignUp from './src/screens/signup/SignUp'
import Loading from './src/components/loading/Loading'
import Login from './src/screens/login/Login'

const App = SwitchNavigator(
    {
        Loading,
        SignUp,
        Login,
        Home
    },
    {
        initialRouteName: 'Loading'
    }
)
export default App

