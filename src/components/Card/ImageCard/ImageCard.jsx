import { useContext } from "react";
import { useSelector } from "react-redux";
import { imgContext } from "../../../context/imgContext";
import CardBG from "../../../images/card-bg.jpg";
import style from "./ImageCard.module.css";

const ImageCard = (props) => {
  // const { urlImg } = useContext(imgContext);
  //замена контекста на redux
  const { urlImg } = useSelector((state) => state.image);

  return (
    <img
      src={urlImg || CardBG}
      alt="Фон открытки"
      // width={840}
      // height={520}
      className={style.image}
    />
  );

  // если через пропсы return <img src={props.img} alt="Фон открытки" width={840} height={520} />;
};

export default ImageCard;
