import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function MainContainer() {
  return (
    <>
      <div className="main-container">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainContainer;
