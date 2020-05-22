import React from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function () {
    return (
        <View style={styles.welcomeCard}>

        <View style={{flex:1, display:'flex'}}>
                <View style={{ flex: 2, margin: 30, marginBottom: 0, display:'flex', flexDirection:'row' }}>
                    <Text style={{ color: '#ffffff', fontWeight:'bold', fontSize:28 }}>
                        27
                    </Text>
                    <MaterialCommunityIcons name="temperature-celsius" color='#ffffff' size={40} />
                    <Ionicons name="ios-partly-sunny" color='#FDB813' size={50}/>
                </View>
                <View style={{ flex: 3, margin: 30, marginBottom: 0  }}>
                    <Text style={{ color: '#ffffff', fontSize: 20 }}>Tue, 12 March</Text>

            </View>
                
        </View>
        
        
            
        </View>
    )
}

const styles = StyleSheet.create({

        welcomeCard: {
            padding: 10,
            paddingTop: 20,
        backgroundColor: '#2f95dc',
            borderRadius: 10,
            height:200,
        },

})