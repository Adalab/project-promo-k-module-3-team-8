import React from 'react';
import InputTemplate from './InputTemplate';
import InputImage from './InputImage';

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
          <InputTemplate
            title="Nombre completo"
            id="name"
            placeholder="Ej: Sally Jill"
            name="full-name"
          />

          <InputTemplate
            title="Puesto"
            id="job"
            placeholder="Ej: Front-end unicorn"
            name="job"
          />

          <InputImage title="Añadir Imagen" id="img-selector" />

          <InputTemplate
            title="Teléfono"
            id="phone"
            type="tel"
            placeholder="Ej: 555-55-55-55"
            name="phone"
          />

          <InputTemplate
            title="Email"
            id="email"
            type="email"
            placeholder="Ej: sally-hill@gmail.com"
            name="email"
          />

          <InputTemplate
            title="Linkedin"
            id="linkedin"
            placeholder="Ej: linkedin.com/in/sally-hill"
            name="linkedin"
          />

          <InputTemplate
            title="Github"
            id="github"
            placeholder="Ej: sally-hill"
            name="github"
          />
        </form>
      </li>
    );
  }
}

export default FormFill;
