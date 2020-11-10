import React from "react";
import InputTemplate from "./InputTemplate";
import InputImage from "./InputImage";

class FormFill extends React.Component {
  render() {
    return (
      <form className="js-form fill item__content" action="#" method="POST">
        <InputTemplate
          title="Nombre completo"
          id="name"
          placeholder="Ej: Sally Jill"
          name="full-name"
        />

        <InputTemplate title="Puesto" id="job" placeholder="Ej: Front-end unicorn" name="job" />

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

        <InputTemplate title="Github" id="github" placeholder="Ej: sally-hill" name="github" />
      </form>
    );
  }
}

export default FormFill;
