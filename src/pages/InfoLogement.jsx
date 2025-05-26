import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow.jsx";
import data from "../data.js";
import ErrorPage from "../pages/ErrorPage.jsx";
import HostInfos from "../components/HostInfos.jsx";
import Collapse from "../components/Collapse.jsx";
import LogementCollapse from "../components/LogementCollapse";

const InfoLogement = () => {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return <ErrorPage />;
  }

  return (
    <>
      <Slideshow pictures={logement.pictures} />
      <HostInfos
        title={logement.title}
        location={logement.location}
        name={logement.host.name}
        picture={logement.host.picture}
        tags={logement.tags}
        rating={logement.rating}
      />
      <LogementCollapse
        description={logement.description}
        equipments={logement.equipments}
      />
    </>
  );
};

export default InfoLogement;
