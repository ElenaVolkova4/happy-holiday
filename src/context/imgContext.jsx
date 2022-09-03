import { createContext } from "react";
import { useState, useContext } from "react";
import { useImg } from "../hooks/useImg";
import { holidaysContext } from "./holidaysContext";

export const imgContext = createContext({});

export const ImgContextProvider = ({ children }) => {
  // const [img, setImg] = useState("");

  // достаем holiday из holidaysContext
  const { holiday } = useContext(holidaysContext);

  const { urlImg } = useImg(holiday);
  // console.log(urlImg);
  return (
    <imgContext.Provider value={{ urlImg }}>{children}</imgContext.Provider>
  );
};
