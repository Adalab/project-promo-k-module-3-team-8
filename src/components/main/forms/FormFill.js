import React from "react";
import InputTemplate from "./InputTemplate";
import InputImage from "./InputImage";

class FormFill extends React.Component {
  render() {
    return (
      <form className="js-form fill item__content" action="#" method="POST">
        <InputTemplate
          handleInput={this.props.handleInput}
          title="Nombre completo"
          id="name"
          placeholder="Ej: Sally Jill"
          name="name"
        />

        <InputTemplate
          handleInput={this.props.handleInput}
          title="Puesto"
          id="job"
          placeholder="Ej: Front-end unicorn"
          name="job"
        />

        <InputImage title="Añadir Imagen" id="img-selector" />

        <InputTemplate
          handleInput={this.props.handleInput}
          title="Teléfono"
          id="phone"
          type="tel"
          placeholder="Ej: 555-55-55-55"
          name="phone"
        />

        <InputTemplate
          handleInput={this.props.handleInput}
          title="Email"
          id="email"
          type="email"
          placeholder="Ej: sally-hill@gmail.com"
          name="email"
        />

        <InputTemplate
          handleInput={this.props.handleInput}
          title="Linkedin"
          id="linkedin"
          placeholder="Ej: linkedin.com/in/sally-hill"
          name="linkedin"
        />

        <InputTemplate
          handleInput={this.props.handleInput}
          title="Github"
          id="github"
          placeholder="Ej: sally-hill"
          name="github"
        />
      </form>
    );
  }
}

export default FormFill;
