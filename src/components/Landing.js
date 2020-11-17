import React from "react";
import Footer from "./Footer";
import Image from "../images/logo-NaN-monster.png";
import "./Landing.scss";

class Landing extends React.Component {
  render() {
    return (
      <>
        <main className="landing__main">
          <h1>
            <img
              src={Image}
              alt="Awesome profile cards"
              title="Awesome profile cards"
              className="landing__logo"
            />
          </h1>
          <div>
            <h2 className="landing__title">Crea tu tarjeta de visita</h2>
            <p className="landing__text">
              Crea mejores contactos profesionales de forma fácil y cómoda
            </p>
          </div>
          <ul className="landing__options">
            <li className="landing__options--item">
              <i className="far fa-object-ungroup" aria-hidden="true"></i>
              <span>Diseña</span>
            </li>
            <li className="landing__options--item">
              <i className="far fa-keyboard" aria-hidden="true"></i>
              <span>Rellena</span>
            </li>
            <li className="landing__options--item">
              <i className="fas fa-share-alt" aria-hidden="true"></i>
              <span>Comparte</span>
            </li>
          </ul>
          <a href="./home.html" className="landing__link">
            Comenzar
          </a>
        </main>

        <Footer />
      </>
    );
  }
}

export default Landing;
