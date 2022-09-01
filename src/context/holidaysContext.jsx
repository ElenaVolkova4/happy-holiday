import { createContext } from "react";
import { useState } from "react";
import { useHolidays } from "../hooks/useHoliday";

export const holidaysContext = createContext({});

//такой провайдер не обязателен, но удобнее
export const HolidaysContextProvider = ({ children }) => {
  const [holiday, setHoliday] = useState("");

  const [holidays] = useHolidays();

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
