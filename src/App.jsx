import { Route, Routes } from "react-router-dom";
import Card from "./components/Card/Card";
import EmptyCard from "./components/EmptyCard/EmptyCard";
import Layout from "./components/Layout/Layout";
// import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
import { HolidaysContextProvider } from "./context/holidaysContext";
import { ImgContextProvider } from "./context/imgContext";
import { TextContextProvider } from "./context/textContext";

const App = () => {
  return (
    // <div style={wrapper}>
    // <HolidaysContextProvider>
    //   <ImgContextProvider>
    //     <TextContextProvider>
    // <Header />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<EmptyCard />} />
        <Route path="card/:holiday" element={<Card />} />
      </Route>
    </Routes>
    // <Footer />
    // </TextContextProvider>
    // </ImgContextProvider>
    // </HolidaysContextProvider>
    // </div>
  );
};

export default App;
