import style from "./Choices.module.css";
import { useState, useContext, useEffect } from "react";
import { holidaysContext } from "../../../context/holidaysContext";
import { URL_API } from "../../../const/const";

// сначала брали инфу из заглушки-массива
// const holidays = {
//   newyear: "Новый год",
//   birthdayWomen: "День рождения  Ж",
//   birthdayMen: "День рождения  М",
//   womenDay: "8 марта",
//   knowledgeDay: "День знаний",
// };

const Choices = () => {
  const [isOpenChoices, setIsOpenChoices] = useState(false);
  // const [holiday, setHoliday] = useState("Выбрать праздник"); сначала брали из массива выше через useState, потом заменили на контекст
  const { holiday, setHoliday } = useContext(holidaysContext);
  //объект!!!!

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

  //показываем/прячем выбор праздников
  const toggleChoices = () => {
    setIsOpenChoices(!isOpenChoices);
  };

  //выбираем праздник (и тут же прячем выбор)
  const changeHoliday = (title) => {
    setHoliday(title);
    toggleChoices();
  };

  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={toggleChoices}>
        {holiday}
      </button>
      {isOpenChoices && (
        <ul className={style.list}>
          {Object.entries(holidays).map((item) => (
            <li
              className={style.item}
              key={item[0]}
              onClick={() => {
                changeHoliday(item[1]);
              }}
            >
              {item[1]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Choices;
