import { useState } from "react";
import "./Header.css";
import "../../assets/css/utilities.css";
import logo from "../../assets/images/logo.png";
import { Menu, X } from "lucide-react";

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
                <a className="drawer__link" href="/about">
                  Institutii
                </a>
              </li>
              <li>
                <a className="drawer__link" href="/contact">
                  Forum
                </a>
              </li>
              <li>
                <a className="drawer__link" href="/about">
                  Sugestii
                </a>
              </li>
              <li>
                <a className="drawer__link" href="/about">
                  Despre Noi
                </a>
              </li>
            </ul>

            <div className="drawer__buttons-container">
              <button className="btn btn-full">Logare</button>
              <button className="btn btn-outline">Inregistrare</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
