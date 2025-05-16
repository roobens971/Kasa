import { NavLink } from "react-router-dom";
import logo from "/src/assets/img-logo/LOGO.png";
function Header() {
  return (
    <header>
      <div className="header_box">
        <img className="img_logo" src={logo} alt="kasa_logo" />
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Apropos"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                A propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
