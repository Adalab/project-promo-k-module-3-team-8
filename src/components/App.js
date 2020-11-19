import '../stylesheets/App.scss';
import React from 'react';
import Header from './Header';
import Main from './main/Main';
import Footer from './Footer';

const fr = new FileReader();

class App extends React.Component {
  constructor() {
    super();
    this.fileInput = React.createRef();
    this.state = {
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      palette: 1,
      fileUrl: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handlePalette = this.handlePalette.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.fakeClick = this.fakeClick.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.writeImage = this.writeImage.bind(this);
  }

  fakeClick() {
    console.log(this.fileInput);
    this.fileInput.current.click();
  }

  writeImage() {
    const url = fr.result;
    this.setState({
      fileUrl: url,
    });
  }

  handleFileChange(ev) {
    const myFile = ev.currentTarget.files[0];

    fr.addEventListener('load', this.writeImage);
    fr.readAsDataURL(myFile);
  }

  handleInput(ev) {
    this.setState({
      [ev.currentTarget.id]: ev.currentTarget.value,
    });
  }
  handlePalette(ev) {
    this.setState({
      palette: ev.currentTarget.value,
    });
  }

  handleReset() {
    this.setState({
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      palette: 1,
    });
  }

  render() {
    return (
      <>
        <Header />
        <Main
          handlePalette={this.handlePalette}
          handleInput={this.handleInput}
          data={this.state}
          handleReset={this.handleReset}
          fakeClick={this.fakeClick}
          writeImage={this.writeImage}
          handleFileChange={this.handleFileChange}
          fileInput={this.fileInput}
        />
        <Footer />
      </>
    );
  }
}

export default App;
