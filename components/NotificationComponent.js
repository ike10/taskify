import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function () {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={{ display: 'flex', flexDirection: 'row', flex: 2, }}>
                    <Text style={{ flex: 3, fontSize: 12 }}>00:00</Text>
                    <Text style={{ flex: 1, fontSize: 12 }}>Work</Text>
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#2f95dc' }}>You have 3 day left until fintech seminar</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', flex: 2 }}>
                    <Text style={{ flex: 2, fontSize: 14 }}>Lagos</Text>
                </View>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        margin: 10,
        marginBottom: 3,
        marginTop: 3,
        borderRadius: 5,
        display: 'flex',
        padding: 10,
        backgroundColor: '#FFFFFF',
        elevation: 10,

    }
})