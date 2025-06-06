import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow.jsx";
import data from "../data-logements.json";
import ErrorPage from "../pages/ErrorPage.jsx";
import HostInfos from "../components/HostInfos.jsx";
import Collapse from "../components/Collapse.jsx";

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


      {/* Collapse pour Description et Équipements */}
      <div className="logement-collapse">
        <Collapse title="Description" variant="logement">
          <p className="text-infos">{logement.description}</p>
        </Collapse>

        {logement.equipments && Array.isArray(logement.equipments) && (
          <Collapse title="Équipements" variant="logement">
            <ul className="text-infos">
              {logement.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Collapse>
        )}
      </div>
    </>
  );
};

export default InfoLogement;
