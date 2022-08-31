import style from "./Choices.module.css";
import { useState } from "react";
import { useContext } from "react";

import { holidayContext } from "../../../context/holidayContext";

const holidays = {
  newyear: "Новый год",
  birthdayWomen: "День рождения  Ж",
  birthdayMen: "День рождения  М",
  womenDay: "8 марта",
  knowledgeDay: "День знаний",
};

const Choices = () => {
  const [isOpenChoices, setIsOpenChoices] = useState(false);
  // const [holiday, setHoliday] = useState("Выбрать праздник");
  const [holiday, setHoliday] = useContext(holidayContext);
  console.log(holiday);

  // const { holiday } = useContext(holidayContext);

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
