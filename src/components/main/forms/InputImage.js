import React from 'react';

class InputImage extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <>
        <label htmlFor={this.props.id}>{this.props.title}</label>
        <div className='action'>
          <button
            className='action__upload-btn js__profile-trigger'
            type='button'
            onClick={this.props.fakeClick}
          >
            Añadir imagen
          </button>
          <input
            type='file'
            name=''
            id={this.props.id}
            className='action__hiddenField js__profile-upload-btn'
            ref={this.props.fileInput} 
            onChange={this.props.handleFileChange}
          />
          <div className='profile'>
            <div className='profile__preview js__profile-preview' style={{backgroundImage: `url(${this.props.data.fileUrl})` }}></div>
          </div>
        </div>
      </>
    );
  }
}

export default InputImage;
