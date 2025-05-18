import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import bannerImage from "/src/assets/img-logo/IMG.png";
import LogementsContainer from "../components/LogementsContainer.jsx";
import Footer from "../components/Footer.jsx";
import MainContainer from "../layout/MainContainer.jsx";


function Accueil() {
  return (
    <>
    <MainContainer>
      <div>
        <Banner image={bannerImage} text="Chez vous, partout et ailleurs" />
      </div>
      <LogementsContainer />   
      </MainContainer>
    </>
  );
}

export default Accueil;
