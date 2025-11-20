import "./Header.css";
import "../../assets/css/utilities.css";
import logo from "../../assets/images/logo.png";

export function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">
        <img className="header__logo-img" src={logo} alt="Logo" />
      </h1>

      <nav className="header__nav" aria-label="Primary">
        <li className="header__nav-item">
          <a className="header__link" href="/">
            Acasă
          </a>
        </li>
        <li className="header__nav-item">
          <a className="header__link" href="/about">
            Instituții
          </a>
        </li>
        <li className="header__nav-item">
          <a className="header__link" href="/services">
            Statul
          </a>
        </li>
        <li className="header__nav-item">
          <a className="header__link" href="/contact">
            Resurse
          </a>
        </li>
        <li className="header__nav-item">
          <a className="header__link" href="/contact">
            Despre Noi
          </a>
        </li>

        <button className="header__button">
          <span className="header__button-circle" aria-hidden="true">
            <span className="header__button-icon header__button-icon--arrow"></span>
          </span>
          <span className="header__button-text">Logare</span>
        </button>
        <button className="header__button">
          <span className="header__button-circle" aria-hidden="true">
            <span className="header__button-icon header__button-icon--arrow"></span>
          </span>
          <span className="header__button-text">Inregistrare</span>
        </button>
      </nav>
    </header>
  );
}
