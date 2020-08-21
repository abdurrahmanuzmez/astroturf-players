import { createSwitchNavigator } from 'react-navigation';
import LoadingScreen from '../loading/Loading';
import SignUpScreen from '../signup/SignUp';
import SignInScreen from '../signin/SignIn';
const AuthNavigator = createSwitchNavigator(
    {
        Loading: { screen: LoadingScreen },
        SignUp: { screen: SignUpScreen },
        SignIn: { screen: SignInScreen }
    },
    { initialRouteName: 'Loading' }
);
export default AuthNavigator;
