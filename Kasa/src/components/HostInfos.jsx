import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function HostInfos({ title, location, name, picture, rating, tags }) {
  const totalStars = 5;
  return (
    <>
      <div className="infos">
        <div>
          <h1>{title}</h1>
          <p>{location}</p>
        </div>

        <div className="host_info">
          <h3>{name}</h3>
          <img className="imgHost" src={picture} alt={name} />
        </div>
      </div>

      <div className="rating_tags">
        <div className="tags">
          <p>
            <span>{tags[0]}</span>
          </p>
          <p>
            <span>{tags[1]}</span>
          </p>
        </div>
        <div className="rating">
          {[...Array(totalStars)].map((_, index) => (
            <FontAwesomeIcon 
              key={index}
              icon={faStar}
              color={
                index < rating
                  ? "rgba(255, 96, 96, 1)"
                  : "rgba(227, 227, 227, 1)"
              }
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default HostInfos;
