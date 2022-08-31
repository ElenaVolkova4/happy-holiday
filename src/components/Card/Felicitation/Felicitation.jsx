import { useContext } from "react";
import { textConext } from "../../../context/textConext";
import style from "./Felicitation.module.css";

const Felicitation = () => {
  const { text } = useContext(textConext);

  return <p className={style.felicitation}>{text} </p>;
};

export default Felicitation;
