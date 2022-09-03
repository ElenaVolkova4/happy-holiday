import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    if (!url) return;
    //внутри useEffect нельзя сделать асинхр ф-цию, сделаю ее самовызывающейся, то бишь в скобках (func)(), чтобы не делать лишний вызов
    (async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          setData(await response.json());
        } else {
          throw new Error(response.status);
        }
      } catch (err) {
        setError(err);
      }
    })();
  }, [url]);

  return [data, error];
};
