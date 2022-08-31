import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { HolidayContextProvider } from "./context/holidayContext";
import { ImgContextProvider } from "./context/imgConext";
import { TextContextProvider } from "./context/textConext";

const App = () => {
  return (
    <div className="App">
      <HolidayContextProvider>
        <ImgContextProvider>
          <TextContextProvider>
            <Header />
            <Card />
            <Footer />
          </TextContextProvider>
        </ImgContextProvider>
      </HolidayContextProvider>
    </div>
  );
};

export default App;
