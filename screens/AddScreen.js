import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView,TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AddTaskComponent from '../components/AddTaskComponent'
import HeaderComponent from '../components/HeaderComponent'
export default function AddScreen() {
  return (
    
    <View style={{flex:1}}>
    <View style={{flex:1}}>
              <HeaderComponent title="Create" />
    </View>
          <View style={styles.container} >
              <AddTaskComponent title="Reminder" />
              <AddTaskComponent title="Event" />
              <AddTaskComponent title="Goal" />
              <AddTaskComponent title="Savings" />
              <AddTaskComponent title="Project" />
              <AddTaskComponent title="Meeting" />
              <AddTaskComponent title="Countdown" />
              <TouchableOpacity style={{
                  height: 150,
                  width: 170,
                  margin: 10,
                  marginLeft: 20,
                  marginBottom: 3,
                  alignItems: 'center',
                  justifyContent: 'center'
              }}>
                  <Ionicons name='md-add' size={50} color='#86accf' />
              </TouchableOpacity>
    </View>
    
              
                       
          
          
    </View>
    
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 7,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fafafa',
    paddingTop: 30,
  }
});
