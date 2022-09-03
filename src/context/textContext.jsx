import { createContext, useContext } from "react";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useText } from "../hooks/useText";
import { holidaysContext } from "./holidaysContext";
import { URL_API } from "../const/const";
import { useSelector } from "react-redux";

export const textContext = createContext({});

export const TextContextProvider = ({ children }) => {
  // достаю holiday из holidaysContext
  // const { holiday } = useContext(holidaysContext);
  //оптимизирую через redux
  const holiday = useSelector((state) => state.holidays.holiday);

  // const [text] = useText(holiday);
  //для оптимизации создала общий хук useFetch и использую вместо useText
  const [{ text }] = useFetch(holiday ? `${URL_API}text/${holiday}` : "");

  return (
    <textContext.Provider value={{ text }}>{children}</textContext.Provider>
  );
};
