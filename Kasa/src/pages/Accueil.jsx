import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import bannerImage from "/src/assets/img-logo/IMG.png";
import ContainerGray from "../components/ContainerGray.jsx";
import Footer from "../components/Footer.jsx";

function Accueil() {
  return (
    <>
      <Header />
      <div>
        <Banner image={bannerImage} text="Chez vous, partout et ailleurs" />
      </div>
      <ContainerGray />
      <Footer />
    </>
  );
}

export default Accueil;
