
import { NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import * as React from 'react';

import MenuScreen from './MenuStack/MenuScreen'
import ProfileScreen from './MenuStack/ProfileScreen'
import ChatScreen from './MenuStack/ChatScreen'
import ProjectScreen from './MenuStack/ProjectScreen'
import TeamScreen from './MenuStack/TeamScreen'
import AboutScreen from './MenuStack/AboutScreen'
import HelpScreen from './MenuStack/HelpScreen'
import SettingScreen from './MenuStack/SettingScreen'



const Stack = createStackNavigator()
const INITIAL_ROUTE_NAME = 'Menu';
export default function MenuStackScreen({navigation, route}) {
    // { navigation, route }
    // Set the header title on the parent stack navigator depending on the
    // currently active tab. Learn more in the documentation:
    // https://reactnavigation.org/docs/en/screen-options-resolution.html
    navigation.setOptions({ headerTitle: getHeaderTitle(route), headerMode:'screen' });

     return (
       
         <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME} screenOptions={{
             gestureEnabled: true,
             headerBackTitleVisible: true,
             headerBackTitle: 'back',
             headerTitleAlign: 'center',
             headerTitle: getHeaderTitle(route),
             headerStyle: {
                 backgroundColor: '#2f95dc',
                 height: 120,
                 elevation: 5,
                 
             },
             headerTintColor: '#ffffff',
             headerTitleStyle: {
                 fontWeight: 'bold',
                 alignSelf: 'center'
             },
             headerMode: 'none'
         }} >
             
             <Stack.Screen 
             name="Menu" 
             component={MenuScreen} 
             options={{
                 title:'Menu',
                 headerMode: 'none'
                 
             }} />
                 <Stack.Screen 
                 name="Profile" 
                 component={ProfileScreen} 
                 options={{
                     title: 'Profile'
                 }}/>
                 <Stack.Screen
                  name="Chat" 
                  component={ChatScreen}
                 options={{
                     title: 'Chat'
                 }} />
                 <Stack.Screen 
                 name="Projects" 
                 component={ProjectScreen} 
                 options={{
                     title: 'Projects'
                 }}
                 />
                 <Stack.Screen 
                 name="Teams" 
                 component={TeamScreen} 
                 options={{
                     title: 'Teams'
                 }}
                 />
                 <Stack.Screen 
                 name="About" 
                 component={AboutScreen} 
                 options={{
                     title: 'About'
                 }}
                 />
                 <Stack.Screen 
                 name="Help" 
                 component={HelpScreen} 
                 options={{
                     title: 'Help'
                 }}
                 />
                 <Stack.Screen 
                 name="Settings" 
                 component={SettingScreen} 
                 options={{
                     title: 'Settings'
                 }}
                 />
             </Stack.Navigator>
         
   
    );
}

function getHeaderTitle(route) {
     const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

     switch (routeName) {
         case 'Menu':
             return 'Menu';
        case 'Profile':
            return 'Profile';
        case 'Chat':
            return 'Chat';
        case 'Projects':
            return 'Projects';
        case 'Teams':
            return 'Teams';
        case 'About':
            return 'About';
        case 'Help':
            return 'Help';
        case 'Settings':
            return 'Settings';
    }
}
