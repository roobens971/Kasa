
import Collapse from "./Collapse.jsx";

const LogementCollapse = ({ description, equipments }) => {
  return (
    <div className="logement-collapse">
      <Collapse title="Description">
        <p>{description}</p>
      </Collapse>

      {equipments && Array.isArray(equipments) && (
        <Collapse title="Équipments">
          <ul>
            {equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Collapse>
      )}
    </div>
  );
};

export default LogementCollapse;

