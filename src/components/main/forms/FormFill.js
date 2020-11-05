import React from "react";

class FormFill extends React.Component {
  render() {
    return (
      <li className="item">
        <div className="js-header2 item__header">
          <div className="item__header--title">
            <i className="far fa-keyboard item__header--icon"></i>
            <h2>Rellena</h2>
          </div>
          <i className="fas fa-angle-down js-arrow2"></i>
        </div>
        <form
          className="js-form js-content2 collapsed item__content fill"
          action="#"
          method="POST"
        >
          <label for="name">Nombre completo</label>
          <input
            className="js-field fill__box"
            id="name"
            type="text"
            placeholder="Ej: Sally Jill"
            name="full-name"
          />
          <label for="job">Puesto</label>
          <input
            className="js-field fill__box"
            id="job"
            type="text"
            placeholder="Ej: Front-end unicorn"
            name="job"
          />
          {/* modificar el nombre del botón "añadir imagen" */}

          <label for="photo">Imagen de perfil</label>
          <include src="./image-components.html"></include>

          <label for="phone">Teléfono</label>
          <input
            className="js-field fill__box"
            id="phone"
            type="tel"
            placeholder="Ej: 555-55-55-55"
            name="phone"
          />
          <label for="email">Email</label>
          <input
            className="js-field fill__box"
            id="email"
            type="email"
            placeholder="Ej: sally-hill@gmail.com"
            name="email"
          />
          <label for="linkedin">Linkedin</label>
          <input
            className="js-field fill__box"
            id="linkedin"
            type="text"
            placeholder="Ej: linkedin.com/in/sally-hill"
            name="linkedin"
          />
          <label for="github">Github</label>
          <input
            className="js-field fill__box"
            id="github"
            type="text"
            placeholder="Ej: sally-hill"
            name="github"
          />
        </form>
      </li>
    );
  }
}

export default FormFill;
