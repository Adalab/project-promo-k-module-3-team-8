import React from "react";
import Preview from "./preview/Preview";
import Forms from "./forms/Forms";
import "./Main.scss";

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <Preview data={this.props.data} handleReset={this.props.handleReset} />
        <Forms data={this.props.data} handlePalette={this.props.handlePalette} handleInput={this.props.handleInput} handleFileChange={this.props.handleFileChange} fakeClick={this.props.fakeClick} writeImage={this.props.writeImage} fileInput={this.props.fileInput} />
      </main>
    );
  }
}

export default Main;
