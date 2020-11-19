import React from "react";
import "./Preview.scss";
import LinkTemplate from "./LinkTemplate";
import previewImage from "../../../images/preview-default-NaN-team-monsters.jpg";
import PropTypes from "prop-types";

class Preview extends React.Component {
  render() {
    return (
      <section className="preview">
        <div className="preview__container">
          <button
            className="preview__reset js-reset"
            onClick={this.props.handleReset}
          >
            <i className="far fa-trash-alt"></i>Reset
          </button>
          <div className="preview__card">
            <div className="preview__card--text">
              <div
                className={`preview__card--stick  stick-border-${this.props.data.palette}`}
              >
                <h1
                  className={` preview__card--name name-${this.props.data.palette}`}
                >
                  {this.props.data.name || "Nombre y Apellidos"}
                </h1>
                <h2 className=" preview__card--job">
                  {this.props.data.job || "Job"}
                </h2>
              </div>
            </div>
            <div
              className="preview__img-container profile__image "
              style={{
                backgroundImage: `url(${
                  this.props.data.fileUrl || previewImage
                })`,
              }}
            ></div>
            <nav>
              <ul className="preview__contact">
                <LinkTemplate
                  link={"tel:" + this.props.data.phone}
                  class="fas fa-mobile-alt"
                  palette={this.props.data.palette}
                />
                <LinkTemplate
                  link={"mailto:" + this.props.data.email}
                  class="far fa-envelope"
                  palette={this.props.data.palette}
                />
                <LinkTemplate
                  link={"https://" + this.props.data.linkedin}
                  class="fab fa-linkedin-in"
                  palette={this.props.data.palette}
                />
                <LinkTemplate
                  link={"https://github.com/" + this.props.data.github}
                  class="fab fa-github-alt"
                  palette={this.props.data.palette}
                />
              </ul>
            </nav>
          </div>
        </div>
      </section>
    );
  }
}

Preview.propTypes = {
  handleReset: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default Preview;
