import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import MenuComponent from '../../components/MenuComponent'
export default function MenuScreen({navigation}) {
    
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <MenuComponent title='Profile' MenuIconName="md-contact" />
        </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <MenuComponent title='Chat' MenuIconName="md-chatboxes" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Projects')}>
                <MenuComponent title='Projects' MenuIconName="ios-apps" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Teams')}>
                <MenuComponent title='Teams' MenuIconName="md-contacts" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <MenuComponent title='About' MenuIconName="md-information-circle" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Help')}>
                <MenuComponent title='Help' MenuIconName="ios-help-circle" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <MenuComponent title='Settings' MenuIconName="ios-settings" />
            </TouchableOpacity>
            
            
            
            
            
            


        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    }
});
