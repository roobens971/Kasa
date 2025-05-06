import { useParams } from "react-router-dom";
import Header from "../components/Header.jsx";
import Slideshow from "../components/Slideshow.jsx";
import data from "../data.js";
import ErrorPage from "../pages/ErrorPage.jsx";
import MainContainer from "../layout/MainContainer.jsx";

function InfoLogement() {
  const { id } = useParams(); // 1. Récupérer l'ID de l'URL
  const logement = data.find((item) => item.id === id); // 2. Chercher le logement

  if (!logement) {
    return <ErrorPage />; // Gérer le cas où l'ID est invalide
  }

  return (
    <>
      <MainContainer>
        <Header />
        <Slideshow pictures={logement.pictures} />
      </MainContainer>
    </>
  );
}

export default InfoLogement;
