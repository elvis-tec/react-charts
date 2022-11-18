import { useEffect, useState } from 'react';
import { getApi } from '../helpers/getApi';

export const useFetchData = () => {
 
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getData = async() => {
        const newData = await getApi();
        setData(newData);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getData();
    }, []);

    return {
        data,
        isLoading
    }
}
