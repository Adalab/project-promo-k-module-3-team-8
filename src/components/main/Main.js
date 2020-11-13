import React from "react";
import Preview from "./preview/Preview";
import Forms from "./forms/Forms";
import "./Main.scss";

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <Preview data={this.props.data} />
        <Forms handlePalette={this.props.handlePalette} handleInput={this.props.handleInput} />
      </main>
    );
  }
}

export default Main;
