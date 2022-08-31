import { createContext } from "react";
import { useState } from "react";

export const imgConext = createContext({});

export const ImgContextProvider = ({ children }) => {
  const [img, setImg] = useState("");
  return (
    <imgConext.Provider value={{ img, setImg }}>{children}</imgConext.Provider>
  );
};
