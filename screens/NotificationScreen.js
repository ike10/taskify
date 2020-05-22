import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import NotificationComponent from '../components/NotificationComponent'
export default function NotificationScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <NotificationComponent/>
            <NotificationComponent />
            <NotificationComponent/>
            <NotificationComponent />
            <NotificationComponent />
            <NotificationComponent />
            <NotificationComponent />
            <NotificationComponent />
            <NotificationComponent />
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    }
});