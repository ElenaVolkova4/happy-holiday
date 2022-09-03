import { useEffect, useState } from "react";
import { URL_API } from "../const/const";

export const useImg = (holiday) => {
  // const [urlImg, setUrlImg] = useState({});

  const [data, setData] = useState({});

  useEffect(() => {
    if (!holiday) return;
    fetch(`${URL_API}image/${holiday}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        if (data.idImg) {
          setData(data);
        }
      })
      .catch((err) => console.error(err));
  }, [holiday]);

  // console.log(data);
  return data;
};
