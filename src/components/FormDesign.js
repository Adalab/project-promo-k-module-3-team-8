import React from "react";

class FormDesign extends React.Component {
  render() {
    return (
      <li className="item">
        <div className="js-header1 item__header">
          <div className="item__header--title">
            <i className="far fa-object-ungroup item__header--icon"></i>
            <h2>Diseña</h2>
          </div>
          <i className="fas fa-angle-down js-arrow1"></i>
        </div>
        <div className="js-content1 collapsed item__content colours">
          <h3 className="colours__title">Colores</h3>
          <form className="colours__palettes">
            <label for="palette1" className="palette-flex palette1">
              <input
                id="palette1"
                type="radio"
                value="1"
                name="colours"
                className="js-option1"
                checked
              />
              <div className="palette1__colour1 colour-box"></div>
              <div className="palette1__colour2 colour-box"></div>
              <div className="palette1__colour3 colour-box"></div>
            </label>
            <label for="palette2" className="palette-flex palette2">
              <input
                id="palette2"
                type="radio"
                value="2"
                name="colours"
                className="js-option2"
              />
              <div className="palette2__colour1 colour-box"></div>
              <div className="palette2__colour2 colour-box"></div>
              <div className="palette2__colour3 colour-box"></div>
            </label>
            <label for="palette3" className="palette-flex palette3">
              <input
                id="palette3"
                type="radio"
                value="3"
                name="colours"
                className="js-option3"
              />
              <div className="palette3__colour1 colour-box"></div>
              <div className="palette3__colour2 colour-box"></div>
              <div className="palette3__colour3 colour-box"></div>
            </label>
          </form>
        </div>
      </li>
    );
  }
}

export default FormDesign;
