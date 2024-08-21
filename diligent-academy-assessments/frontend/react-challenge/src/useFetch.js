import { useState, useEffect } from 'react';
import { callApi } from './call-api';

export function useFetch() {

    const [allHeroes, setAllHeroes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchHeroes = async () => {

        setLoading(true);

        try {

            const data = await callApi('heroes');

            setAllHeroes(data);

            console.log(data);

            setError(null);

            setLoading(false);

        } catch (error) {

            setError('Failed to fetch heroes.');

            setAllHeroes([]);

        }
    };

    useEffect(() => {
        fetchHeroes();
    }, []);

    return { allHeroes, error, loading };
}