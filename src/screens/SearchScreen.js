import React,{useState} from "react";
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import SearchBar from "../components/SearchBar";
import useSearch from "../hooks/useSearch";
import ResultList from "../components/ResultList";
const SearchScreen =()=>{
    const [searchTerm, setSearchTerm] = useState('');
    const [results, errorMessage, searchApi] = useSearch();
    const filterResultsByLikes = (likes) => {
        return results.filter((result)=>{
            // console.log(result.likes)
            // console.log(result.likes >=likes);
            switch(likes){
            case 300:return (result.likes >=likes);
            case 200:return (result.likes >= likes && result.likes<=300);
            case 100:return (result.likes>=likes && result.likes<=200);
            default: return (result.likes<100);  
            }
        })
    }
    // console.log(results.length);


    // console.log('hdjkljhghcjdk    '+results[0]);
    // const[results, setResults] = useState([]);
    // const [errorMessage, setErrorMessage] = useState('');
    // const searchApi=async(sTerm)=>{
    //     console.log('hello');
    //     try{
    //     const response = await unsplash.get(`/search/photos`,{
    //         params:{
    //             query: sTerm,
    //             page : 5,
    //             per_page:50
    //         }
    //     });
    //     setResults(response.data.results);
    //     setErrorMessage('');
    // console.log(results);

    // }
    // catch(e){
    //     setErrorMessage('something went wrong');
    // }
    // }

    // useEffect(
    //     ()=>{searchApi('flowers')},
    //     []
    // );
    return (   <View style={{flex:1}}>
        <Text style={styles.textStyle}>
            Search Screen
        </Text>
        <SearchBar 
        term={searchTerm} 
        setTerm={setSearchTerm}
        onTermSubmit={()=>searchApi(searchTerm)}/>
        <Text>
            we have found {results.length} results
        </Text>
        {errorMessage?
        <Text>
            {errorMessage}
        </Text>:
        null}
        <ScrollView>
        <ResultList title='liked by more than 300'
        results={filterResultsByLikes(300)}
        />
        <ResultList title='liked by more than 200'
        results={filterResultsByLikes(200)}
        />
        <ResultList title='liked by more than 100'
        results={filterResultsByLikes(100)}
        />
        <ResultList title='Other Images related to your search!!'
        results={filterResultsByLikes(400)}
        />
        </ScrollView>
    </View>
);
}

const styles = StyleSheet.create({
textStyle: {
    alignSelf: 'center'
}
})

export default SearchScreen;