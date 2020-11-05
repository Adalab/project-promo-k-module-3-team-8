import React from 'react';

class InputImage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <label for={this.props.id}>{this.props.title}</label>
        <div class="action">
          <button class="action__upload-btn js__profile-trigger" type="button">
            Añadir imagen
          </button>
          <input
            type="file"
            name=""
            id={this.props.id}
            class="action__hiddenField js__profile-upload-btn"
          />
          <div class="profile">
            <div class="profile__preview js__profile-preview"></div>
          </div>
        </div>
      </>
    );
  }
}

export default InputImage;
