import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const[error, setError] = useState(null);

    useEffect(() => {
        const aborter = new AbortController();

        fetch(url, { signal: aborter.signal })
           .then(res => {
             if (!res.ok){
               throw Error('resource not found')
             }
             return res.json();
           })
           .then(data => {
             setData(data);
             setIsPending(false);
             setError(null)
           })
           .catch(err => {
            if (err.name === 'AbortError') {
            console.log('aborted');
            } else {
            setIsPending(false)
            setError(err.message);
            }
           })
           return () => aborter.abort();
     }, []);

     return { data, isPending, error }
}

export default useFetch