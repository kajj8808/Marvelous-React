import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [result, setResult] = useState(undefined);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (json.code === 200) {
          setResult(json);
        } else {
          setError(`fetch error ${json.code}`);
        }
        setIsLoading(false);
      });
  }, [url]);

  return { isLoading, error, result };
}
