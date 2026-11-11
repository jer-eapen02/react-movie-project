import BrowserLogo from "../assets/browser logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const Nav = () => {

  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <div className="nav__container">
        <img className="logo" src={BrowserLogo} alt="" />
        <ul className="nav__links">
          <li>
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li>
            <a href="#" className="nav__link no-cursor">
              About
            </a>
          </li>
          <li>
            <a href="#" className="nav__link nav__link--primary no-cursor">
              Contact
            </a>
          </li>
        </ul>
        <button className="btn__menu" onClick={openMenu}>
          <FontAwesomeIcon icon="bars" />
        </button>
        <div className="menu__backdrop" style={{ visibility: "hidden" }}>
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="menu__list">
              <a href="#" className="menu__link no-cursor" onClick={closeMenu}>
                About
              </a>
            </li>
            <li className="menu__list">
              <a href="#" className="menu__link no-cursor" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
