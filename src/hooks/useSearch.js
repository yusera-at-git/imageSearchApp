import React, {useEffect, useState} from 'react';
import unsplash from '../api/unsplash';
export default () => {
const[results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const searchApi=async(sTerm)=>{
        // console.log('hello');
        try{
        const response = await unsplash.get(`/search/photos`,{
            params:{
                query: sTerm,
                page : 5,
                per_page:50
            }
        });
        setResults(response.data.results);
        setErrorMessage('');
    // console.log(results);

    }
    catch(e){
        setErrorMessage('something went wrong');
    }
    }

    useEffect(
        ()=>{searchApi('flowers')},
        []
    );

    return [results, errorMessage, searchApi];
}