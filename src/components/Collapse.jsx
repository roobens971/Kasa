import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen(!isOpen);


  return (
    <div className="collapse-container">
      <div className="titre-accordion" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <FontAwesomeIcon icon={isOpen ? faChevronDown: faChevronUp} />
      </div>
      {isOpen && <div className="description">{children}</div>}
    </div>
  );
};
export default Collapse;
