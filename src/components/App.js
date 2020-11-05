import '../stylesheets/App.scss';
import React from 'react';
import Header from './Header';
import Main from './main/Main';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
