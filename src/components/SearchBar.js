import React,{useState} from 'react';
import {Text, StyleSheet, TextInput, View} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


const SearchBar =(props)=>{
    return(
        <View style={styles.backgroundStyle}>
            <FontAwesome5 name="search" size={30} color="blue" style={{alignSelf:'center', marginHorizontal:5}} />
            <TextInput 
            value={props.term}
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder= 'Search Here'
            onChangeText={props.setTerm}
            onEndEditing={props.onTermSubmit}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center'
    },
    backgroundStyle:{
        backgroundColor: "rgb(255, 150, 220)" ,
        height: 50,
        marginHorizontal:15,
        borderRadius:10,
        // paddingTop:10,
        paddingLeft:5,
        flexDirection: 'row',
        // alignItems:'center'
    },
    inputStyle:{
        alignSelf:'center',
        fontSize:26,
        // marginBottom:5,
        // borderColor:'black',
        // borderWidth:1,
        flex:1,
        marginHorizontal:8,
        // marginBottom:8
    }
})

export default SearchBar;