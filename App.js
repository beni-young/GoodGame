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

const switchNavigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
      Signup: SignupScreen,
      Signin: SigninScreen
    }),
    mainFlow: createBottomTabNavigator({
      GroupListFlow: createStackNavigator ({
        GroupList: GroupListScreen,
        GroupDetail: GroupDetailScreen
      }),
      GroupCreate: GroupCreateScreen,
      Account: AccountScreen,
      Chat: ChatScreen

    })
});

export default createAppContainer(switchNavigator);