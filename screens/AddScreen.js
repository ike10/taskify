import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AddTaskComponent from '../components/AddTaskComponent'
export default function AddScreen() {
  return (
    
    <View style={styles.container}>
          
              <AddTaskComponent />
              <AddTaskComponent />
              <AddTaskComponent />
              <AddTaskComponent />
              <AddTaskComponent />
              <AddTaskComponent />
              <AddTaskComponent />
          
          
          
    </View>
    
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fafafa',
    paddingTop: 30,
  }
});
