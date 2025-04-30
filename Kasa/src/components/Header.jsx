import { NavLink } from "react-router-dom"
import logo from "/src/assets/img-logo/LOGO.png";
function Header() {
  return (
    <header>
      <div className="header_box">
        <img className="img_logo" src={logo} alt="kasa_logo" />
        <nav>
          <ul>
            <li><NavLink exact activeClassName="active" to="/">Accueil</NavLink></li>
            <li><NavLink activeClassName="active" to="/Apropos">A propos</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
