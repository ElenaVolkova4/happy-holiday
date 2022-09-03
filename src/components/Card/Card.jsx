import Felicitation from "./Felicitation/Felicitation";
import ImageCard from "./ImageCard/ImageCard";
import style from "./Card.module.css";

const Card = () => {
  return (
    <div>
      <div className={style.card}>
        <div className={style.wrapper}>
          <div className={style.image}>
            <Felicitation />
            <ImageCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
