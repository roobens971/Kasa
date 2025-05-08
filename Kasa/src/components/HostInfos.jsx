import Tags from "./Tags";
import Rating from "./Rating";
function HostInfos({ title, location, name, picture, rating, tags }) {
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
        <Tags tags={tags} />
        <Rating rating={rating} />
      </div>
    </>
  );
}

export default HostInfos;
