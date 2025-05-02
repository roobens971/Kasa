import { Link } from "react-router-dom";
function Card({ title, img }) {
  return (
    <div className="card">
      <Link to="/Logement">
        <img className="CardPictures" src={img} alt={title} />
      </Link>
      <h3 className="textTitle">{title}</h3>
    </div>
  );
}

export default Card;
