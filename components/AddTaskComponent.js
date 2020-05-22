import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function () {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={{ flex: 2 }}>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#ffffff' }}>Go to the market</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 170,
        margin: 10,
        marginLeft: 20,
        marginBottom: 3,
        marginTop: 3,
        borderRadius: 5,
        display: 'flex',
        padding: 10,
        paddingTop: 100,
        backgroundColor: '#86accf',
        elevation: 10,
        alignItems: 'flex-end',
        justifyContent: 'center'

    }
})