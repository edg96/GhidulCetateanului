import "./Header.css";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">
        <img src={logo} />
      </h1>
      <nav className="main-nav-list">
        <li>
          <a href="/">Acasă</a>
        </li>
        <li>
          <a href="/about">Instituții</a>
        </li>
        <li>
          <a href="/services">Statul</a>
        </li>
        <li>
          <a href="/contact">Resurse</a>
        </li>
        <li>
          <a href="/contact">Despre Noi</a>
        </li>

        <button className="header-button">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Logare</span>
        </button>
        <button className="header-button">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Inregistrare</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
