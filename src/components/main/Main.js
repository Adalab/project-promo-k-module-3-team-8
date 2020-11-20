import React from 'react';
import Preview from './preview/Preview';
import Forms from './forms/Forms';
import './Main.scss';
import PropTypes from 'prop-types';

class Main extends React.Component {
  render() {
    return (
      <main className='main'>
        <Preview data={this.props.data} handleReset={this.props.handleReset} />
        <Forms
          data={this.props.data}
          handlePalette={this.props.handlePalette}
          handleInput={this.props.handleInput}
          handleFileChange={this.props.handleFileChange}
          fakeClick={this.props.fakeClick}
          writeImage={this.props.writeImage}
          fileInput={this.props.fileInput}
          sendRequest={this.props.sendRequest}
        />
      </main>
    );
  }
}

Main.propTypes = {
  data: PropTypes.object.isRequired,
  handleReset: PropTypes.func.isRequired,
  handlePalette: PropTypes.func.isRequired,
  handleFileChange: PropTypes.func.isRequired,
  fakeClick: PropTypes.func.isRequired,
  writeImage: PropTypes.func.isRequired,
  fileInput: PropTypes.object.isRequired,
};

export default Main;
