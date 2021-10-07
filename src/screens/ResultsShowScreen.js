import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import unsplash from '../api/unsplash';
// import useSearch from '../hooks/useSearch';
// import SearchBar from '../components/SearchBar';


const ResultsShowScreen = (props) => {
    // const [searchTerm, setSearchTerm] = useState('');
    // const [results, errorMessage, searchApi] = useSearch();

    const id= props.navigation.getParam('id');
    const [photo, setPhoto]=useState(null);
    const[error, setError]=useState('');
    // console.log(id);
    const getPhoto= async(id) =>{
        try{
        const response=await unsplash.get(`/photos/${id}`);
        // console.log(response.data.urls.regular);
        setPhoto(response.data);
        setError('');
        console.log(photo.alt_description)

    }
        catch(e){
            setError('Something went wrong');
        }
}
useEffect(()=>{
    getPhoto(id);
},
[]);
if(!photo){
    return null
}
    return (
        <View>
            <Text>
                Results Show Screen {photo.id} {photo.alt_description}
            </Text>
{/* 
            <SearchBar 
            term={searchTerm} 
            setTerm={setSearchTerm}
            onTermSubmit={()=>searchApi(searchTerm)}/>
            {errorMessage?
            <Text>
                {errorMessage}
            </Text>:
            null} */}

            <Image 
            style={styles.imageStyle}
            source={{uri: photo.urls.small}} />
            <Text style={styles.descriptionStyle}>
                {photo.description} 
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    imageStyle:{
        width:250,
        borderRadius:10,
        height:345,
        width:345,
        alignSelf:'center'

    },
    descriptionStyle:{
        // color: 'blue',
        fontWeight:'bold',
        marginHorizontal:10
    }
})


export default ResultsShowScreen;