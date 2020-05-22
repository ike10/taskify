import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function () {
    return (
        <View style={styles.welcomeCard}>

        <View style={{flex:1, display:'flex', flexDirection:'row'}}>
                <View style={{ flex: 3, margin: 30, marginBottom: 0  }}>
                    <Text style={{ color: '#ffffff',}}>Tue, 12 March</Text>

            </View>
                <View style={{ flex: 1, margin: 30, marginBottom: 0 }}>
                    <Text style={{ color: '#ffffff', }}>
                    27C
                    </Text>
            </View>
        </View>
        <View style={{flex:2}}>
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
        </View>
        <View style={{flex:1}}>
                <Text style={{
                    color: '#ffffff', margin: 30, marginTop: 10, marginBottom: 0,
                }}>Take a look at today's activities</Text>
        </View>
            
        </View>
    )
}

const styles = StyleSheet.create({

        welcomeCard: {
            margin: 10,
            marginTop: 20,
        backgroundColor: '#2f95dc',
            borderRadius: 10,
            height:250,
            width: 380,
        },

})