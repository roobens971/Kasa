import { Link } from "react-router-dom";
function Card({ id, title, img }) {
  return (
    <div className="card">
      <Link to={`/logement/${id}`}>
        <img className="CardPictures" src={img} alt={title} />
      </Link>
      <p className="textTitle">{title}</p>
    </div>
  );
}

export default Card;
