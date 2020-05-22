import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import MenuComponent from '../components/MenuComponent'
export default function MenuScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <MenuComponent title='Profile' MenuIconName="md-contact" />
            <MenuComponent title='Chat' MenuIconName="md-chatboxes" />
            <MenuComponent title='Projects' MenuIconName="ios-apps" />
            <MenuComponent title='Teams' MenuIconName="md-contacts" />
            <MenuComponent title='About' MenuIconName="md-information-circle" />
            <MenuComponent title='Help' MenuIconName="ios-help-circle" />
            <MenuComponent title='Settings' MenuIconName="ios-settings" />


        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    }
});
