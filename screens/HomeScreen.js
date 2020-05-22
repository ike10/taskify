import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image, Modal, Platform, Button, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import TaskComponent from '../components/TaskComponent'
//import { ScrollView } from 'react-native-gesture-handler';
import WelcomeCardComponent from '../components/WelcomeCardComponent'
import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
    
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <ScrollView style={{
                    flex: 1 }}
                    horizontal={true}
                    >
                    <WelcomeCardComponent />
                    <WelcomeCardComponent />
                    <WelcomeCardComponent />
                    <WelcomeCardComponent />
                </ScrollView>
            
                
            </View>
            <View style={styles.mainContainer}>
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 10, marginTop: 10, paddingTop: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>All </Text>
                    <Text style={{ fontWeight: 'bold' }}>Today </Text>
                    <Text style={{ fontWeight: 'bold' }}>Upcoming </Text>
                </View>
                <ScrollView style={{ marginTop: 30 }}>
                    <TaskComponent />
                    <TaskComponent />
                    <TaskComponent />
                    <TaskComponent />
                    <TaskComponent />
                    <TaskComponent />
                    <TaskComponent />
                    <TaskComponent />
                </ScrollView>           
            </View>
        </View>
    );
}

HomeScreen.navigationOptions = {
    header: null,
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flex: 3,
        
    },
    
    mainContainer: {
        flex: 4,

    },
});
