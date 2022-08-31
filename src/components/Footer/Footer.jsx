import Container from "../Container/Container";
import style from "./Footer.module.css";
import { ReactComponent as VKIcon } from "../../images/vk.svg";
import { ReactComponent as TGIcon } from "../../images/tg.svg";
import { ReactComponent as PinIcon } from "../../images/pinterest.svg";
import { ReactComponent as StIcon } from "../../images/stumbleupon.svg";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.contacts}>
            <p>
              Design: <a href="#">Anastasia Ilina</a>
            </p>
            <p>
              Сoder:{" "}
              <a href="https://github.com/ElenaVolkova4">Elena Volkova</a>
            </p>
            <p>© HBCard, 2022</p>
          </div>

          <ul className={style.social}>
            <li className={style.item}>
              <a href="https://vk.com" className={style.link}>
                <VKIcon />
              </a>
            </li>
            <li className={style.item}>
              <a href="https://t.me" className={style.link}>
                <TGIcon />
              </a>
            </li>
            <li className={style.item}>
              <a href="https:/pinterest.com" className={style.link}>
                <PinIcon />
              </a>
            </li>
            <li className={style.item}>
              <a href="https:/stumbleupon.com" className={style.link}>
                <StIcon />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
