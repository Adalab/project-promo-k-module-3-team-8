import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    return (
      <>
        <label htmlFor={this.props.id}>{this.props.title}</label>
        <div className='action'>
          <button
            className='action__upload-btn '
            type='button'
            onClick={this.props.fakeClick}
          >
            Añadir imagen
          </button>
          <input
            type='file'
            name=''
            id={this.props.id}
            className='action__hiddenField '
            ref={this.props.fileInput}
            onChange={this.props.handleFileChange}
          />
          <div className='profile'>
            <div
              className='profile__preview '
              style={{ backgroundImage: `url(${this.props.data.fileUrl})` }}
            ></div>
          </div>
        </div>
      </>
    );
  }
}

InputImage.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fakeClick: PropTypes.func.isRequired,
  fileInput: PropTypes.object.isRequired,
  handleFileChange: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default InputImage;
