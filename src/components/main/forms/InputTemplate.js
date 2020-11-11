import React from 'react';

class InputTemplate extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <label htmlFor={this.props.id}>{this.props.title}</label>
        <input
          className="js-field fill__box"
          id={this.props.id}
          type={this.props.type}
          placeholder={this.props.placeholder}
          name={this.props.name}
        />
      </>
    );
  }
}

InputTemplate.defaultProps = {
  type: 'text',
};

export default InputTemplate;
