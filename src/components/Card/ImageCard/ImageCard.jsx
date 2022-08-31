import { useContext } from "react";
import { imgConext } from "../../../context/imgConext";

const ImageCard = (props) => {
  const img = useContext(imgConext);
  console.log(img);

  return <img src={props.img} alt="Фон открытки" width={840} height={520} />;
};

export default ImageCard;
