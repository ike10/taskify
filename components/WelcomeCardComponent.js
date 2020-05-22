import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function () {
    return (
        <View style={styles.welcomeCard}>
            <Text style={{ color: '#ffffff', margin: 30, marginBottom: 0 }}>Tue, 12 March</Text>
            <Text
                style={{
                    color: '#ffffff',
                    fontSize: 30,
                    fontWeight: 'bold',
                    margin: 30,
                    marginTop: 10,
                    marginBottom: 0,
                }}
            >Hello Ike</Text>
            <Text style={{
                color: '#ffffff', margin: 30, marginTop: 10, marginBottom: 0,
            }}>Take a look at today's activities</Text>
        </View>
    )
}

const styles = StyleSheet.create({

        welcomeCard: {
            margin: 10,
            marginTop: 20,
            backgroundColor: '#86accf',
            borderRadius: 10,
            height:250,
            width: 380,
        },

})