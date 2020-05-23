import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
export default function ({title, MenuIconName}) {
    
    return (
 
            <View style={styles.container}>
                <View style={{display:'flex', flexDirection:'row'}}>
                    <Ionicons
                        name={MenuIconName}
                        size={30}
                    color='#133c59'
                        
                    />
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#133c59', marginLeft:10 }}>{title}</Text>
                </View>
            </View>


    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        marginBottom: 3,
        marginTop: 3,
        borderRadius: 5,
        display: 'flex',
        padding: 10,
        paddingLeft:20,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'

    }
})