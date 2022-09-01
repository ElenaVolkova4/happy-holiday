import { useEffect, useState } from "react";
import { URL_API } from "../const/const";

export const useHolidays = () => {
  const [holidays, setHolidays] = useState({});

  useEffect(() => {
    fetch(URL_API)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => setHolidays(data).catch((err) => console.error(err)));
  }, [setHolidays]);

  return [holidays];
};

// при написании своих хуков лучше придерживаться таких же правил (таких же стилей), как и встроенные хуки, например, возвращать массив, чтобы потом его деструктурировать
