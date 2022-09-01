import style from "./Choices.module.css";
import { useState, useContext, useEffect } from "react";
import { holidaysContext } from "../../../context/holidaysContext";
// import { useHolidays } from "../../../hooks/useHoliday";
// import { URL_API } from "../../../const/const";

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
  const { holiday, holidays, changeHoliday } = useContext(holidaysContext);
  //объект!!!!

  //запрос к API (перенесено в отдельный хук)
  // const [holidays, setHolidays] = useState({});

  // useEffect(() => {
  //   fetch(URL_API)
  //     .then((response) => {
  //       if (response.status !== 200) {
  //         throw new Error(response.status);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => setHolidays(data).catch((err) => console.error(err)));
  // }, [setHolidays]);

  // теперь достаем своим хуком - перенесено в holidaysContext
  // const [holidays] = useHolidays();

  //показываем/прячем выбор праздников
  const toggleChoices = () => {
    setIsOpenChoices(!isOpenChoices);
  };

  //выбираем праздник (и тут же прячем выбор)
  //перенесено в holidaysContext
  // const changeHoliday = (title) => {
  //   setHoliday(title);
  //   toggleChoices();
  // };

  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={toggleChoices}>
        {holidays[holiday] || "Выбрать праздник"}
      </button>
      {isOpenChoices && (
        <ul className={style.list}>
          {Object.entries(holidays).map((item) => (
            <li
              className={style.item}
              key={item[0]}
              onClick={() => {
                changeHoliday(item[0]);
                toggleChoices();
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
