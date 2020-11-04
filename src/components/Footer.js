import React from "react";
import icon from "../images/icon-NaN-monster.png";
import logoAdalab from "../images/logo-adalab.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__copyright">
          <img
            className="footer__copyright--icon"
            src={icon}
            alt="Logo de NaN · Not a Name"
            title="NaN · Not a Name"
          />
          <div className="footer__copyright--text">
            <p>NaN · Not a Name &#64;2020</p>
            <p>Awesome profile-cards</p>
          </div>
        </div>
        <div>
          <a href="https://adalab.es/" title="Ir a Adalab">
            <img className="footer__logo" src={logoAdalab} alt="Logo Adalab" />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
