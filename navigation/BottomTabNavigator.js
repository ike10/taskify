import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AddScreen from '../screens/AddScreen';
import NotificationScreen from '../screens/NotificationScreen'
import CalendarScreen from '../screens/CalendarScreen'
import MenuStackScreen from '../screens/MenuStackScreen'
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
    // Set the header title on the parent stack navigator depending on the
    // currently active tab. Learn more in the documentation:
    // https://reactnavigation.org/docs/en/screen-options-resolution.html
    navigation.setOptions({
        headerTitle: getHeaderTitle(route),
        headerStyle: {
            backgroundColor: '#ffffff',
        },
        headerTintColor: '#2f95dc',
        headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center'
        },
        headerMode:'none',
        headerShown: false
        
    });

    return (
        <BottomTab.Navigator
            initialRouteName={INITIAL_ROUTE_NAME}      
        >
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
                   headerShown:false,
                   headerMode:'screen',
                }}
            />
            <BottomTab.Screen
                name="Calendar"
                component={CalendarScreen}
                options={{
                    title: 'Calendar',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-calendar" />,
                }}
            />
            <BottomTab.Screen
                name="Add"
                component={AddScreen}
                options={{
                    title: 'Add',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-add-circle" />,
                }}
            />
            <BottomTab.Screen
                name="Notifications"
                component={NotificationScreen}
                options={{
                    title: 'Notifications',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-notifications" />,
                }}
            />
            <BottomTab.Screen
                name="Menu"
                component={MenuStackScreen}
                options={{
                    title: 'Menu',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-menu" />,
                    headerShown: false,
                    headerMode: 'none',
                    header:null
                }}
                
            />
        </BottomTab.Navigator>
    );
}

function getHeaderTitle(route) {
    const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

    switch (routeName) {
        case 'Home':
            return 'Home';
        case 'Calendar':
            return 'Calendar';
        case 'Add':
            return 'Add';
        case 'Notifications':
            return 'Notifications';
        case 'Menu':
            return 'menu';
    }
}
