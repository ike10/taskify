import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function () {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#374d61' }}>About</Text>
                </View>
            </View>
        </TouchableOpacity>

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
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'

    }
})