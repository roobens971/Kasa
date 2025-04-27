import { Link } from "react-router-dom"
import logo from "/src/assets/img-logo/LOGO.png";
function Header() {
  return (
    <header>
      <div className="header_box">
        <img className="img_logo" src={logo} alt="kasa_logo" />
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">A propos</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
