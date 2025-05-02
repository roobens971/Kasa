import data from "../data.js";
import Card from "./Card.jsx";
function Logements() {
  const logements = data;
  return (
    <div className="DisplayCard">
        {logements.map((logement) => (
          <Card key={logement.id} title={logement.title} img={logement.cover} />
        ))}
    </div>
  );
}

export default Logements;
