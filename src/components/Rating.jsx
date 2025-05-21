import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function Rating({rating}) {
    const totalStars = 5;
  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          color={
            index < rating ? "rgba(255, 96, 96, 1)" : "rgba(227, 227, 227, 1)"
          }
        />
      ))}
    </div>
  );
}

export default Rating;
