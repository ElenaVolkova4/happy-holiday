import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const wrapper = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
};

const btn = {
  display: "block",
  margin: "20px auto",
  padding: "10px",
  border: "2px solid #00c78b",
  borderRadius: "30px",
  background: "#00c78b",
  fontWeight: "700",
  fontSize: "18px",
  color: "#ffffff",
};

const Layout = () => {
  const {
    text: { idText },
    image: { idImg },
  } = useSelector((state) => state);
  return (
    <div style={wrapper}>
      {/* <HolidaysContextProvider>
    <ImgContextProvider>
      <TextContextProvider> */}
      <Header />
      <Outlet />
      {idText && idImg && (
        <Link style={btn} to={`singleCard/${idText}/${idImg}`} target="_blank">
          Поделиться открыткой
        </Link>
      )}
      <Footer />
      {/* </TextContextProvider>
        </ImgContextProvider>
      </HolidaysContextProvider> */}
    </div>
  );
};

export default Layout;
