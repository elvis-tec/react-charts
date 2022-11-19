import { useEffect, useState } from 'react';
import { filterData } from '../helpers/filterData';
import { getApi } from '../helpers/getApi';

export const useFetchData = () => {
 
    const [data, setData] = useState([]);
    const [baseData, setBaseData] = useState([]);
    const [years, setYears] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getData = async() => {
        const newData = await getApi();
        setBaseData(newData);
        setData(filterData(newData, 'Branch', 'valor'));
        let dates = newData.map((item)=>({
            year: item.Ano,
            month: item.Mes,
        }))
        setYears(dates.filter((value, index, self) =>
        index === self.findIndex((t) => (
          t.year === value.year && t.month === value.month
        ))));
        setIsLoading(false);
    }

    const setFilters = ({year, month})=>{
        setData(filterData(baseData, 'Branch', 'valor', year, month));
    }
    
    useEffect( () => {
        getData();
    }, []);

    return {
        data,
        years,
        isLoading,
        setFilters,
    }
}
