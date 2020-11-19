import React from 'react';
import './Header.scss';
import logo from '../images/logo-NaN-monster.png';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <img
            className="header__logo"
            src={logo}
            alt="Logo NaN awesome profile cards"
            title="Ir a inicio"
          />
        </Link>
      </header>
    );
  }
}

export default Header;
