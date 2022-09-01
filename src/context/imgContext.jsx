import { createContext } from "react";
import { useState, useContext } from "react";
import { useImg } from "../hooks/useImg";
import { holidaysContext } from "./holidaysContext";

export const imgContext = createContext({});

export const ImgContextProvider = ({ children }) => {
  // const [img, setImg] = useState("");

  // достаем holiday из holidaysContext
  const { holiday } = useContext(holidaysContext);

  const [img] = useImg(holiday);
  console.log(img);
  return <imgContext.Provider value={{ img }}>{children}</imgContext.Provider>;
};
