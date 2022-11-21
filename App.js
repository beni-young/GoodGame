import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from './src/screens/SignupScreen';
import GroupCreateScreen from './src/screens/GroupCreateScreen';
import GroupDetailScreen from './src/screens/GroupDetailScreen';
import GroupListScreen from './src/screens/GroupListScreen';
import ChatScreen from './src/screens/ChatScreen';
import MapScreen from './src/screens/MapScreen';
import {Provider as AuthProvider} from "./src/context/AuthContext";
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

const switchNavigator = createSwitchNavigator({
    ResolveAuth: ResolveAuthScreen,
    loginFlow: createStackNavigator({
      Signup: SignupScreen,
      Signin: SigninScreen
    }),
    mainFlow: createBottomTabNavigator({
      Chat: ChatScreen,      
      Map: MapScreen,
      Account: AccountScreen,
      Groups: createStackNavigator ({
        GroupList: GroupListScreen,
        GroupDetail: GroupDetailScreen,
        GroupCreate: GroupCreateScreen
      }), 
    })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => {setNavigator(navigator)}}   />
    </AuthProvider>
  )
}