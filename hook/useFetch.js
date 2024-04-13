import { useState, useEffect } from "react";
import axios from "axios";

const useFetch =(endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
        headers: {
            'X-RapidAPI-Key': '038f4561dbmshe3e2d5e7f273082p128631jsn928d8bbf16ff',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    }

    const fetchData = async () => {
        try {
            const res = await axios.request(options);
            console.log(res.data.data)
            setData(res.data.data)
            setIsLoading(false)
        } catch (error) {   
            setError(error);
            alert('There is an error')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData();
    }

    return { data, isLoading, error, refetch }
}

export default useFetch