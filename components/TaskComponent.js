import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, CheckBox} from 'react-native'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
export default function(){
    return(
        <TouchableOpacity>
            <View style={styles.container}>
                
                <View style={{ flex: 4 , marginLeft:10}}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold',  }}>Go to the market</Text>
                    <Text style={{ fontSize: 12, color: '#808080',  marginLeft:10 }}>Go to the market</Text>
                      
                </View>
                <View style={{ flex: 1, marginLeft: 10, alignItems:'center', justifyContent:'center' }}>
                     <CheckBox
                        title=''
                        checkedColor="red"
                        uncheckedColor="#000000"
                    />
                </View>  
            </View>
        </TouchableOpacity>
        
    )
}

const styles= StyleSheet.create({
    container:{
        height: 80,
        marginBottom: 3,
        marginTop: 10,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#edf2f5',
        elevation: 5,
        marginLeft:5,
        marginRight: 5,

    }
})