import { useContext } from "react";
import { useSelector } from "react-redux";
import { textContext } from "../../../context/textContext";
import style from "./Felicitation.module.css";

const Felicitation = () => {
  // const { text } = useContext(textContext);
  //замена контектса на redux
  const { text, loading } = useSelector((state) => state.text);

  return (
    <p className={style.felicitation}>
      {loading === "loading"
        ? "Загрузка"
        : text === ""
        ? "Выберите повод для поздравления"
        : text}
    </p>
  );
};

export default Felicitation;
