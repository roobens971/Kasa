import { Link } from "react-router-dom";
import ErrorLogo from "/src/assets/img-logo/404.png";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import MainContainer from "../layout/MainContainer.jsx";

function ErrorPage() {
  return (
    <>
      <MainContainer>
        <div className="errorFlex">
          <img className="errorImage" src={ErrorLogo} alt="Error_Logo" />
          <p className="oupsText">
            Oups! La page que vous demandez n'existe pas.
          </p>
          <p>
            <Link to="/">Retourner sur la page d’accueil</Link>
          </p>
        </div>
      </MainContainer>
    </>
  );
}

export default ErrorPage;
