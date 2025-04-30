import React, { useState } from "react";

function Accordion({ children }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: openIndex === index,
          onToggle: () => handleToggle(index),
        })
      )}
    </div>
  );
}

export default Accordion;
