import { createContext } from "react";
import { useState } from "react";

export const textContext = createContext({});

export const TextContextProvider = ({ children }) => {
  const [text, setText] = useState("Поздравляю");
  return (
    <textContext.Provider value={{ text, setText }}>
      {children}
    </textContext.Provider>
  );
};
