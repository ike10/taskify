import * as Linking from 'expo-linking';

export default {
    prefixes: [Linking.makeUrl('/')],
    config: {
        Root: {
            path: 'root',
            screens: {
                Home: 'home',
                Calendar: 'calendar',
                Tasks: 'tasks',
                Notifications: 'notifications',
            },
        },
    },
};