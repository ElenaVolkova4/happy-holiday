import { createContext } from "react";
import { useState, useContext } from "react";
import { useFetch } from "../hooks/useFetch";
import { useImg } from "../hooks/useImg";
import { holidaysContext } from "./holidaysContext";
import { URL_API } from "../const/const";

export const imgContext = createContext({});

export const ImgContextProvider = ({ children }) => {
  // const [img, setImg] = useState("");

  // достаю holiday из holidaysContext
  const { holiday } = useContext(holidaysContext);

  // const { urlImg } = useImg(holiday);
  //для оптимизации создала общий хук useFetch и использую вместо useHolidays
  const [{ urlImg }] = useFetch(holiday ? `${URL_API}image/${holiday}` : "");

  // console.log(urlImg);
  return (
    <imgContext.Provider value={{ urlImg }}>{children}</imgContext.Provider>
  );
};
