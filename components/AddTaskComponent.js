import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function ({title, AddTaskColor}) {
    return (
        <TouchableOpacity>
            <View style={[styles.container]}>
                <View style={{ flex: 2 }}>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#ffffff' }}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
//backgroundColor: '#86accf',
const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 170,
        margin: 10,
        marginLeft: 20,
        marginBottom: 3,
        backgroundColor: '#2f95dc',
        marginTop: 3,
        borderRadius: 5,
        display: 'flex',
        padding: 10,
        paddingTop: 100,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center'

    }
})