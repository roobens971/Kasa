import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Collapse() {
  // Un tableau avec les index des blocs ouverts
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    setOpenIndexes(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // on ferme le bloc
          : [...prev, index] // on ajoute ce bloc à la liste
    );
  };

  const data = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement verifiées par nos équipes.",
    },

    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.",
    },

    {
      title: "Service",
      content:
        "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
    },

    {
      title: "Sécurité",
      content:
        "La sécurité est la propriété de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifié que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} style={{ border: "none", marginBottom: "17.5px" }}>
          <div
            onClick={() => handleToggle(index)}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "15px",
              fontSize: "18px",
              width: "90%",
              marginLeft: "100px",
              fontWeight: "700",
              borderRadius: "5px",
              background: "rgba(255, 96, 96, 1)",
              color: "rgba(255, 255, 255, 1)",
              cursor: "pointer",
            }}
          >
            {item.title}
            <FontAwesomeIcon
              icon={openIndexes.includes(index) ? faChevronUp : faChevronDown}
              size="lg"
            />
          </div>
          {openIndexes.includes(index) && (
            <div
              style={{
                padding: "10px",
                fontSize: "17px",
                width: "90%",
                marginLeft: "100px",
                background: "rgba(246, 246, 246, 0.45)",
              }}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default Collapse;
