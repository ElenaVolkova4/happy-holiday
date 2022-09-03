import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { HolidaysContextProvider } from "./context/holidaysContext";
import { ImgContextProvider } from "./context/imgContext";
import { TextContextProvider } from "./context/textContext";

const App = () => {
  return (
    <div className="App">
      {/* <HolidaysContextProvider>
        <ImgContextProvider>
          <TextContextProvider> */}
      <Header />
      <Card />
      <Footer />
      {/* </TextContextProvider>
        </ImgContextProvider>
      </HolidaysContextProvider> */}
    </div>
  );
};

export default App;
