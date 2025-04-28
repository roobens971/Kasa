import bannerImage from "/src/assets/img-logo/IMG.png"
function Banner() {
    return (
        <div className="Banner_container">
            <img className="banner_img" src={bannerImage} alt="banner_photo" />
            <div className="banner_text">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    )
}

export default Banner