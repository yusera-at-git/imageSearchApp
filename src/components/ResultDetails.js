import React from "react";
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

const ResultDetails = (props) => {
    return (
        <View style={styles.constainer}>
            
            <Image 
            style={styles.imageStyle}
            source={{uri: props.result.urls.small}}/>
            <ScrollView style={styles.textStyle}>
            <Text>
                liked by {props.result.likes}
            </Text>
            <Text >
                {props.result.description?props.result.description:props.result.alt_description}
            </Text>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create(
    {
        constainer:{
            marginHorizontal:10,
            marginBottom:10,
            width:350,
            alignItems:'center'
        },
        imageStyle:{
            width:250,
            borderRadius:10,
            height:345,
            width:345

        },
        textStyle:{
            flex:1,
            height:100
        }
    }
);

export default ResultDetails;