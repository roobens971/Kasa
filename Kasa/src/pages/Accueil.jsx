import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import bannerImage from "/src/assets/img-logo/IMG.png";
import LogementsBox from "../components/LogementsBox.jsx";
import Footer from "../components/Footer.jsx";

function Accueil() {
  return (
    <>
      <Header />
      <div>
        <Banner image={bannerImage} text="Chez vous, partout et ailleurs" />
      </div>
      <LogementsBox />
      <Footer />
    </>
  );
}

export default Accueil;
