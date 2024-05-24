import { useState, useEffect } from 'react';

const useDataFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setError('Failed to fetch data');
        }
        const result = await res.json();
        setData(result.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    dataFetch();
  }, [url]);

  return { data, loading, error };
};

export default useDataFetch;
