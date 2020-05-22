import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image, Modal, Platform, Button, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import TaskComponent from '../components/TaskComponent'
//import { ScrollView } from 'react-native-gesture-handler';
import WelcomeCardComponent from '../components/WelcomeCardComponent'
import { MonoText } from '../components/StyledText';
import HeaderComponent from '../components/HeaderComponent'
import { TextInput } from 'react-native-gesture-handler';
export default function HomeScreen() {
    
    return (
        <View style={styles.container}>
            
            <View style={styles.headerContainer}>
                
                    <WelcomeCardComponent />
                    
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 2, marginTop: 20 }}>
                        <Text
                            style={{
                                color: '#133c59',
                                fontSize: 24,
                                fontWeight: 'bold',
                                margin: 10,
                                marginTop: 20,
                                marginBottom: 0,
                            }}
                        >Good Morning Ike</Text>
                        <Text style={{
                            fontSize:14, color: '#133c59', margin: 10, marginTop: 15, marginBottom: 0, fontWeight: 'bold'
                        }}>You have 34 minutes left for your meeting</Text>
                        
                        
                    </View>
                    
                </View>    
            
                
            </View>
            <View style={styles.mainContainer}>
                <View style={{marginLeft:250, marginTop:10, display:'flex', flexDirection:'row' }}>
                    <TextInput placeholder="Search Tasks" style={{margin:10}} />
                    <Ionicons name="md-search" size={30} color='#133c59' style={{ margin: 10 }}/>
                </View>
                <ScrollView style={{ marginTop: 10 }}>
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
