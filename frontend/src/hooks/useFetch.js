import axios from '../axiosInstance';
import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(url);
                // console.log('res', res);
                setData(res.data);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);
    
    const reFetch = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url);
            setData(res.data);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };
    return {data, loading, error, reFetch};

}

export default useFetch;