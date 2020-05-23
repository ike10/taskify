import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, CheckBox } from 'react-native'

import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
export default function () {
    return (
        <TouchableOpacity>
            <View style={styles.container}>

                <View style={{ flex: 4, marginLeft: 10, display:'flex' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold',}}>Build Task App</Text>
                    <Text style={{ fontSize: 12, color: '#808080' }}>fix splash screen and mobile navigation</Text>
                    
                </View>
                <View style={{ flex: 2, marginLeft: 10,}}>
                    
                    <MaterialIcons name="people" size={30} />
                </View>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        height: 170,
        width: 170,
        borderRadius: 10,
        display: 'flex',
        padding: 5,
        paddingTop:10,
        backgroundColor: '#edf2f5',
        elevation: 5,
        marginLeft: 10,


    }
})