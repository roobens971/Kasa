import Banner from "../components/Banner.jsx";
import bannerImage from "/src/assets/img-logo/IMG.png";
import Logement from "../components/Logements.jsx"

function Accueil() {
  return (
    <>
      <Banner image={bannerImage} text="Chez vous, partout et ailleurs" />
      <Logement />
    </>
  );
}

export default Accueil;
