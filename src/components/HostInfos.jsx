import Tags from "./Tags";
import Rating from "./Rating";
function HostInfos({ title, location, name, picture, rating, tags }) {
  return (
    <>
      <div className="infos">
        <div className="title">
          <h1>{title}</h1>
          <p>{location}</p>
        </div>

        <div className="tags">
          <Tags tags={tags} />
        </div>

        <div className="host">
          <p className="host-name">{name}</p>
          <img className="host-picture" src={picture} alt={name} />
        </div>

           <div className="rating">
        <Rating rating={rating} />
      </div>
      </div>

   
    </>
  );
}

export default HostInfos;
