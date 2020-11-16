import '../stylesheets/App.scss';
import React from 'react';
import Header from './Header';
import Main from './main/Main';
import Footer from './Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Nombre Apellidos',
      job: 'Job',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      palette: 1,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handlePalette = this.handlePalette.bind(this);
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
  render() {
    return (
      <>
        <Header />
        <Main
          handlePalette={this.handlePalette}
          handleInput={this.handleInput}
          data={this.state}
        />
        <Footer />
      </>
    );
  }
}

export default App;
