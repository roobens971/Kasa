import { useParams } from "react-router-dom";
import Header from "../components/Header.jsx";
import Slideshow from "../components/Slideshow.jsx";
import data from "../data.js";
import ErrorPage from "../pages/ErrorPage.jsx";
import MainContainer from "../layout/MainContainer.jsx";
import HostInfos from "../components/HostInfos.jsx";
import Footer from "../components/Footer.jsx"

function InfoLogement() {
  const { id } = useParams(); // 1. Récupérer l'ID de l'URL
  const logement = data.find((item) => item.id === id); // 2. Chercher le logement

  if (!logement) {
    return <ErrorPage />; // Gérer le cas où l'ID est invalide
  }

  return (
    
      <MainContainer>
        <Header />
        <Slideshow pictures={logement.pictures} />
        <HostInfos
          title={logement.title}
          location={logement.location}
          name={logement.host.name}
          picture={logement.host.picture}
          tags={logement.tags}
          rating={logement.rating}
        />
         <Footer/>
      </MainContainer>
  
  );
}

export default InfoLogement;
