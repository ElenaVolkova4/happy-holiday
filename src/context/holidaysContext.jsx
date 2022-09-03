import { createContext } from "react";
import { useState } from "react";
import { URL_API } from "../const/const";
import { useFetch } from "../hooks/useFetch";
import { useHolidays } from "../hooks/useHoliday";

export const holidaysContext = createContext({});

//такой провайдер не обязателен, но удобнее
export const HolidaysContextProvider = ({ children }) => {
  const [holiday, setHoliday] = useState("");

  // const [holidays] = useHolidays();
  //для оптимизации создала общий хук useFetch и использую вместо useHolidays
  const [holidays] = useFetch(URL_API);

  const changeHoliday = (title) => {
    setHoliday(title);
    // toggleChoices();
  };

  return (
    <holidaysContext.Provider
      value={{ holiday, holidays, setHoliday, changeHoliday }}
    >
      {children}
    </holidaysContext.Provider>
  );
};
