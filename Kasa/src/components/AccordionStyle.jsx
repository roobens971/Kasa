import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';


function AccordionStyle({ title, isOpen, onToggle, children }) {
  return (
    <div style={{ border: "none", marginBottom: "17.5px" }}>
      <div
        onClick={onToggle}
        style={{ display:"flex", flexDirection:"row", justifyContent:"space-between",padding: "15px", fontSize:"18px", width:"90%", marginLeft:"100px", fontWeight:"700", borderRadius:"5px", background: "rgba(255, 96, 96, 1)", color:"rgba(255, 255, 255, 1)",cursor: "pointer" }}
      >
        {title} {" "}
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} size="lg"/>
      </div>
      {isOpen && <div style={{ padding: "10px", fontSize:"17px", width:"90%", marginLeft:"100px", background:"rgba(246, 246, 246, 0.45)" }}>{children}</div>}
    </div>
  );
}

export default AccordionStyle;
