import { createContext, useContext } from "react";
import { useState } from "react";
import { useText } from "../hooks/useText";
import { holidaysContext } from "./holidaysContext";

export const textContext = createContext({});

export const TextContextProvider = ({ children }) => {
  // достаем holiday из holidaysContext
  const { holiday } = useContext(holidaysContext);

  const [text] = useText(holiday);

  return (
    <textContext.Provider value={{ text }}>{children}</textContext.Provider>
  );
};
