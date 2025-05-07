import data from "../data.js";
import Card from "./Card.jsx";
function Logements() {
  
  return (
    <div className="DisplayCard">
        {data.map((logement) => (
          <Card key={logement.id} id={logement.id} title={logement.title} img={logement.cover} />
        ))}
    </div>
  );
}   

export default Logements;
