import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';

export default function AppHeader() {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/header.png')}/>
            <View style={styles.profile}>
                <Text style={{color:'white', alignSelf:'center', letterSpacing:1.5, fontWeight:'bold'}}>MF</Text>    
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex:0.16,
        backgroundColor:'white',
        flexDirection:'row',
        shadowColor:'#000',
        shadowOpacity:0.3,
        shadowRadius:7,
        shadowOffset:{height:3}
    },
    image: {
        position:'absolute',
        height: 105,
        width:415
    },
    profile: {
        height:50,
        width:50,
        left:330,
        top:55, 
        borderRadius:50,
        backgroundColor:'#4476a1',
        justifyContent:'center'
    },
    profile2: {
        height:25,
        width:45,
        left:330,
        top:55, 
        borderRadius:50,
        backgroundColor:'red',
        justifyContent:'center'
    },
});