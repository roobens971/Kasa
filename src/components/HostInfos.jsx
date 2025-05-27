import Tags from "./Tags";
import Rating from "./Rating";
function HostInfos({ title, location, name, picture, rating, tags }) {
  return (
    <>
      <div className="infos">
        <div className="title_location">
          <h1>{title}</h1>
          <p>{location}</p>
        </div>

        <div className="host_info">
          <p className="host-name">{name}</p>
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
