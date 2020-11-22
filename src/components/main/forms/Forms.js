import React from "react";
import FormDesign from "./FormDesign";
import FormFill from "./FormFill";
import FormShare from "./FormShare";
import Collapsable from "./Collapsable";
import "./Forms.scss";
import PropTypes from "prop-types";

class Forms extends React.Component {
  render() {
    return (
      <section className="forms">
        <ul className="forms__list">
          <Collapsable
            title="Diseña"
            icon="far fa-object-ungroup"
            colourClass="colours"
          >
            <FormDesign handlePalette={this.props.handlePalette} />
          </Collapsable>
          <Collapsable title="Rellena" icon="far fa-keyboard" colourClass="">
            <FormFill
              data={this.props.data}
              handleInput={this.props.handleInput}
              handleFileChange={this.props.handleFileChange}
              fakeClick={this.props.fakeClick}
              writeImage={this.props.writeImage}
              fileInput={this.props.fileInput}
            />
          </Collapsable>
          <Collapsable title="Comparte" icon="fas fa-share-alt" colourClass="">
            <FormShare
              sendRequest={this.props.sendRequest}
              data={this.props.data}
            />
          </Collapsable>
        </ul>
      </section>
    );
  }
}

Forms.propTypes = {
  data: PropTypes.object.isRequired,
  fakeClick: PropTypes.func.isRequired,
  writeImage: PropTypes.func.isRequired,
  fileInput: PropTypes.object.isRequired,
  handleFileChange: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  handlePalette: PropTypes.func.isRequired,
};

export default Forms;
