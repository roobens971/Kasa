
function Card({ title, img }) {
  return (
    <div className="card">
      <img className="CardPictures" src={img} alt={title} />
        <h3 className="textTitle">{title}</h3>
    </div>
  );
}

export default Card;
