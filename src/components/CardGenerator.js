import '../stylesheets/App.scss';
import React from 'react';
import Header from './Header';
import Main from './main/Main';
import Footer from './Footer';
import apiCall from '../services/fetch';

const fr = new FileReader();

class CardGenerator extends React.Component {
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
      apiSuccess: false,
      apiCardUrl: '',
      apiError: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handlePalette = this.handlePalette.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.fakeClick = this.fakeClick.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.writeImage = this.writeImage.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }
  sendRequest() {
    const apiData = {
      name: this.state.name,
      job: this.state.job,
      phone: this.state.phone,
      email: this.state.email,
      linkedin: this.state.linkedin,
      github: this.state.github,
      palette: this.state.palette,
      photo: this.state.fileUrl,
    };
    apiCall(apiData).then((response) => {
      if (response.success === true) {
        this.setState({
          apiSuccess: true,
          apiCardUrl: response.cardURL,
          apiError: '',
        });
        console.log(this.state.apiCardUrl);
      } else {
        this.setState({
          apiSuccess: false,
          apiCardUrl: '',
          apiError: response.error,
        });
      }
    });
  }

  fakeClick() {
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
      fileUrl: '',
      apiSuccess: false,
      apiCardUrl: '',
      apiError: '',
    });
    localStorage.clear();
  }

  componentDidUpdate() {
    localStorage.setItem('data', JSON.stringify(this.state));
  }

  componentDidMount() {
    const lastData = JSON.parse(localStorage.getItem('data'));
    this.setState(lastData);
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
          sendRequest={this.sendRequest}
        />
        <Footer />
      </>
    );
  }
}

export default CardGenerator;
