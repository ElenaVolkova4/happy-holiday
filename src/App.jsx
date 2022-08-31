import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

//временный объект
const style = {};

const App = () => {
  return (
    <div className="App">
      <Header />

      <Card></Card>
      <div className={style.card}>
        <div className={style.wrapper}>
          <div className={style.image}>
            <img className={style.img} src="" alt="" />
            <p className={style.text}>
              Поздравляю с днем рожденья! <br /> Пусть будет жизнь полна
              веселья, <br />
              Не будет грусти и хлопот, <br />А только счастье круглый год!{" "}
              <br />
              Желаю творческих успехов,
              <br /> Прекрасных дней, улыбок, смеха. <br />
              Любви, душевного тепла, <br />
              Как сказка, чтобы жизнь была!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
