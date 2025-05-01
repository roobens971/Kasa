function Banner({ image, text }) {
  return (
    <div className="Banner_container">
      <img className="banner_img" src={image} alt="banner_photo" />
      {text && (
        <div className="banner_text">
          <h1>{text}</h1>
        </div>
      )}
    </div>
  );
}

export default Banner;
