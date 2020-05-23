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
import ProjectCard from '../components/ProjectCard'
export default function HomeScreen() {
    
    return (
        <View style={styles.container}>
            
            <View style={styles.headerContainer}>
                
                    <WelcomeCardComponent />
                    
                <View style={{ flex:1 }}>
                    <View style={{ flex: 2, marginTop: 10 }}>
                        <Text
                            style={{
                                
                                fontSize: 24,
                                fontWeight: 'bold',
                                margin: 10,
                                marginTop: 10,
                                marginBottom: 0,
                                borderTopLeftRadius:10,
                                borderTopRightRadius:10,
                            }}
                        >Good Morning Ike</Text>
                        {/* <Text style={{
                            fontSize:14, color: '#133c59', margin: 10, marginTop: 10, marginBottom: 0, fontWeight: 'bold'
                        }}>You have 34 minutes left for your meeting</Text> */}
                        
                        
                    </View>
                    
                </View>    
            
                
            </View>
            <View style={styles.mainContainer}>
                <View style={{flex: 2, marginTop:0,  margin: 5 }}>
                    {/* <TextInput placeholder="Search Tasks" style={{margin:10}} />
                    <Ionicons name="md-search" size={30} color='#133c59' style={{ margin: 10 }}/> */}
                    <View style={{  marginTop: 10, display: 'flex', flexDirection: 'row', }}>
                        <Text style={{ marginLeft:5, flex: 3, fontSize: 18,  fontWeight: 'bold', }}>Upcoming Tasks</Text>
                        <Text style={{ flex: 1, fontSize: 14,  fontWeight: 'bold', }}>See More...</Text>
                    </View>
                    <ScrollView style={{  marginTop: 20 }}>
                        <TaskComponent />
                        <TaskComponent />
                        <TaskComponent />
                    </ScrollView>
                    </View>
                <View style={{ flex: 2, marginTop: 0, padding:10 }}>
                <View style={{flex: 1, marginTop:0,  margin: 5 }}>
                        <View style={{  marginTop: 0, display: 'flex' }}>
                            <Text style={{  fontSize: 18, fontWeight: 'bold', }}>My Tasks</Text>
                            <View style={{  display: 'flex', flexDirection: 'row', marginLeft:10, marginTop:10 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#808080' }}>Today</Text>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#808080', marginLeft: 20}}>Tommorow</Text>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 20, color: '#808080' }}>Filter</Text> 
                            </View>
                        </View>
                    </View>
                
                <View style={{ flex: 4, marginTop: 10 }}>
                        <ScrollView horizontal={true} style={{ marginTop: 10 }}>
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                        </ScrollView>
                </View>
                </View>
                         
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
        backgroundColor: '#2f95dc',
    },
    headerContainer: {
        flex: 2,
        backgroundColor: '#ffffff',
        
    },
    
    mainContainer: {
        flex: 4,
        paddingLeft:10,
        paddingRight: 10,
        backgroundColor: '#ffffff',
        
    },
});
