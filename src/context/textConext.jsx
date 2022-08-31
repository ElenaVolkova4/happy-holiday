import { createContext } from "react";
import { useState } from "react";

export const textConext = createContext({});

export const TextContextProvider = ({ children }) => {
  const [text, setText] = useState("Поздравляю");
  return (
    <textConext.Provider value={{ text, setText }}>
      {children}
    </textConext.Provider>
  );
};
