import React from "react";

class FormShare extends React.Component {
  render() {
    return (
      <>
        <li className="item">
          <div className="js-header3 item__header">
            <div className="item__header--title">
              <i className="fas fa-share-alt item__header--icon"></i>
              <h2>Comparte</h2>
            </div>
            <i className="fas fa-angle-down js-arrow3"></i>
          </div>
          <form className="js-content3 collapsed item__content share js-share" action="">
            <i className="far fa-id-card share__icon"></i>
            <input className="js-submit share__text" type="button" value="Crear Tarjeta" />
          </form>
        </li>

        <div className="share-url js-share-url hidden">
          <div className="share-url__container">
            <h3 className="share-url__title">La tarjeta ha sido creada:</h3>
            <a
              className="js-response share-url__link"
              target="_blank"
              rel="noreferrer"
              href="enlace"
            >
              Aquí aparecerá un enlace
            </a>
            <a
              className="share-url__link--share"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/Adalab_Digital"
            >
              dd
              <i className="fab fa-twitter share-url__link--twitter"></i>
              Compartir en twitter{" "}
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default FormShare;
