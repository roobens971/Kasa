import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen(!isOpen);


  return (
    <div className="collapse-container">
      <button className="titre-accordion" onClick={toggleCollapse} aria-expanded={isOpen} aria-controls={`collapse-panel-${title}`}>
        <span>{title}</span>
        <FontAwesomeIcon icon={isOpen ? faChevronDown: faChevronUp} />
      </button>
      {isOpen && <div id={`collapse-panel-${title}`} className="description">{children}</div>}
    </div>
  );
};
export default Collapse;
