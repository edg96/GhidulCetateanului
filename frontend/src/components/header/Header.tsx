import { useState } from "react";
import "./Header.css";
import "../../assets/css/utilities.css";
import logo from "../../assets/images/logo.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function toggleMenu() {
    setIsOpenMenu((prev) => !prev);
  }

  return (
    <header className="header">
      <h1 className="header__logo">
        <img className="header__logo-img" src={logo} alt="Logo" />
      </h1>

      <button
        className="header__menu-toggle"
        onClick={toggleMenu}
        aria-label={isOpenMenu ? "Inchideti meniul" : "Deschideti Meniu"}
      >
        {isOpenMenu ? <X /> : <Menu />}
      </button>

      {isOpenMenu && (
        <div className="drawer-backdrop" onClick={toggleMenu}>
          <nav className="drawer" onClick={(e) => e.stopPropagation()}>
            <button className="drawer__close" onClick={toggleMenu}>
              <X />
            </button>

            <ul className="drawer__nav-list">
              <li>
                <Link className="drawer__link" to="/">
                  Acasa
                </Link>
              </li>
              <li>
                <Link className="drawer__link" to="/fake-news">
                  Fake News
                </Link>
              </li>
              <li>
                <Link className="drawer__link" to="/contact">
                  Forum
                </Link>
              </li>
              <li>
                <Link className="drawer__link" to="/about">
                  Sugestii
                </Link>
              </li>
              <li>
                <Link className="drawer__link" to="/about-us">
                  Despre Noi
                </Link>
              </li>
            </ul>

            <div className="drawer__buttons-container">
              <button className="btn btn-full">Logare</button>

              <Link className="btn btn-outline" to="/sing-up">
                Inregistrare
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
