import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

export default function(){
    return(
        <TouchableOpacity>
            <View style={styles.container}>
                
                <View style={{ flex: 2 , marginLeft:10}}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color:'#2f95dc' }}>Go to the market</Text>
                </View>
                
            </View>
        </TouchableOpacity>
        
    )
}

const styles= StyleSheet.create({
    container:{
        height: 60,
        marginBottom: 3,
        marginTop: 3,
        margin:10,
        borderRadius: 5,
        display: 'flex',
        padding: 10,
        backgroundColor: '#FFFFFF',
        elevation: 0,

    }
})