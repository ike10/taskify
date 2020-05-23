import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import HeaderComponent from '../components/HeaderComponent'
import CalendarTaskComponent from '../components/CalendarTaskComponent'
import CurrentTimeTaskComponent from '../components/CurrentTimeTaskComponent'

export default function CalendarScreen() {
    return (
        <View style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={{flex:1}}>
                <HeaderComponent title="Calendar" />
            </View>

            
            <View style={styles.mainContainer}>
                <View style={{flex:1}}>

                </View>
                <View style={{ flex: 3, backgroundColor:'#000000' }}>
                    <ScrollView>
                        
                        <CurrentTimeTaskComponent />
                        <CalendarTaskComponent />
                        <CalendarTaskComponent />
                        <CalendarTaskComponent />
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    mainContainer:{
        flex:5,
    }
});