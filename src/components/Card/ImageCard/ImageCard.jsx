import { useContext } from "react";
import { imgContext } from "../../../context/imgContext";
import CardBG from "../../../images/card-bg.jpg";
import style from "./Felicitation.module.css";

const ImageCard = (props) => {
  const { urlImg } = useContext(imgContext);
  // console.log(urlImg);

  return (
    <img src={urlImg || CardBG} alt="Фон открытки" width={840} height={520} />
  );

  // если через пропсы return <img src={props.img} alt="Фон открытки" width={840} height={520} />;
};

export default ImageCard;
