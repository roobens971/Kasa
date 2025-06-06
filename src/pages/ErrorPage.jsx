import { Link } from "react-router-dom";
import ErrorLogo from "/src/assets/img-logo/404.png";

function ErrorPage() {
  return (
    <>
      <div className="errorFlex">
        <img className="errorImage" src={ErrorLogo} alt="Error_Logo" />
        <p className="oupsText">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <p>
          <Link to="/">Retourner sur la page d’accueil</Link>
        </p>
      </div>
    </>
  );
}

export default ErrorPage;
