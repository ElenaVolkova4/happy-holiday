import { createContext } from "react";
import { useState } from "react";

export const holidaysContext = createContext({});

//такой провайдер не обязателен, но удобнее
export const HolidaysContextProvider = ({ children }) => {
  const [holiday, setHoliday] = useState("Выбрать праздник");
  return (
    <holidaysContext.Provider value={{ holiday, setHoliday }}>
      {children}
    </holidaysContext.Provider>
  );
};
