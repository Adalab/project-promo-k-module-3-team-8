import React from "react";
import "./Header.scss";
import logo from "../images/logo-NaN-monster.png";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <a href="./index.html">
          <img
            className="header__logo"
            src={logo}
            alt="Logo NaN awesome profile cards"
            title="Ir a inicio"
          />
        </a>
      </header>
    );
  }
}

export default Header;
