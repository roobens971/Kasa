import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";


function Slideshow({ pictures }) {
  let [activeSlide, setActiveSlide] = useState(0);
  const finalSlides = pictures.length;


  const slideLeft = () => {
    setActiveSlide((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };


  const slideRight = () => {
    setActiveSlide((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slides">
      {finalSlides > 1 && (
        <div className="ArrowIcon">
          <FontAwesomeIcon
            onClick={slideLeft}
            className="Icon"
            icon={faChevronLeft}
          />
          <FontAwesomeIcon
            onClick={slideRight}
            className="Icon"
            icon={faChevronRight}
          />
        </div>
      )}
      {finalSlides > 1 && (
          <div className="slidesNumbers">
        <span className="number">
          {activeSlide + 1}/{finalSlides}
        </span>
      </div>
      )}
      <div className="slideshow">
        <img
          className="imgSlides"
          src={pictures[activeSlide]}
          alt={`Photo ${activeSlide + 1}`}
        />
      </div>
    </div>
  );
}

export default Slideshow;
