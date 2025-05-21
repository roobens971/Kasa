import { Link } from "react-router-dom";
function Card({ id, title, img }) {
  return (
    <div className="card">
      <Link to={`/logement/${id}`}>
        <img className="CardPictures" src={img} alt={title} />
      </Link>
      <h3 className="textTitle">{title}</h3>
    </div>
  );
}

export default Card;
