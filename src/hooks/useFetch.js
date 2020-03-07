import { useState, useEffect } from "react";

export const useFetch = url => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(data => {
        setIsLoading(false);
        setFetchedData(data);
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  }, [url]);
  return { isLoading, fetchedData };
};
