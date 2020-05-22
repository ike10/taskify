import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function ({ title }) {
    return (
        
            <View style={[styles.container]}>
                
            <Text style={{ fontSize: 20, fontWeight: 'bold',  color: '#ffffff', }}>{title}</Text>
                
            </View>
    )
}
// backgroundColor: '#ffffff',
//backgroundColor: '#86accf',
const styles = StyleSheet.create({
    container: {
        height: 120,
        backgroundColor: '#2f95dc',
        alignItems: 'center',
        justifyContent: 'center',
        elevation:5

    }
})