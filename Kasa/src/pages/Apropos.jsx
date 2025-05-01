import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Banner from "../components/Banner.jsx";
import bannerImage from "/src/assets/img-logo/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"
import Collapse from "../components/Collapse.jsx";

function Apropos() {
  return (
    <>
      <div>
        <Header />
        <Banner image={bannerImage} />
        <Collapse/>
        <Footer />
      </div>
    </>
  );
}

export default Apropos;
