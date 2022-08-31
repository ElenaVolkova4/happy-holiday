import { createContext } from "react";
import { useState } from "react";

export const holidayContext = createContext({});

export const HolidayContextProvider = ({ children }) => {
  const [holiday, setHoliday] = useState("Поздравляю");
  return (
    <holiday.Provider value={{ holiday, setHoliday }}>
      {children}
    </holiday.Provider>
  );
};
