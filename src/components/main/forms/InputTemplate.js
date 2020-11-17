import React from "react";
import PropTypes from "prop-types";

class InputTemplate extends React.Component {
  render() {
    return (
      <>
        <label htmlFor={this.props.id}>{this.props.title}</label>
        <input
          className="fill__box"
          id={this.props.id}
          type={this.props.type}
          placeholder={this.props.placeholder}
          name={this.props.name}
          onKeyUp={this.props.handleInput}
        />
      </>
    );
  }
}

InputTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
};

InputTemplate.defaultProps = {
  type: "text",
  placeholder: "rellena este campo",
};

export default InputTemplate;
