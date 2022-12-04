import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { LogBox} from 'react-native';
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from './src/screens/SignupScreen';
import GroupCreateScreen from './src/screens/GroupCreateScreen';
import GroupDetailScreen from './src/screens/GroupDetailScreen';
import GroupListScreen from './src/screens/GroupListScreen';
import GroupEditScreen from './src/screens/GroupEditScreen';
import ChatScreen from './src/screens/ChatScreen';
import MapScreen from './src/screens/MapScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

import { setNavigator } from './src/navigationRef';

import {Provider as GroupProvider} from './src/context/GroupContext';
import { Provider as PaperProvider} from 'react-native-paper';
import {Provider as AuthProvider} from "./src/context/AuthContext";
LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);

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
        GroupCreate: GroupCreateScreen,
        GroupEdit: GroupEditScreen,        
      }), 
    })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <GroupProvider>
        <PaperProvider>
          <App ref={(navigator) => {setNavigator(navigator)}}   />
        </PaperProvider>
      </GroupProvider>
    </AuthProvider>
  )
}