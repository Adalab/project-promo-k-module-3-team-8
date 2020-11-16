import React from "react";
import "./Preview.scss";
import LinkTemplate from "./LinkTemplate";
import previewImage from '../../../images/preview-default-NaN-team-monsters.jpg';

class Preview extends React.Component {
  render() {
    return (
      <section className="preview">
        <div className="preview__container">
          <button className="preview__reset js-reset" onClick={this.props.handleReset}>
            <i className="far fa-trash-alt"></i>Reset
          </button>
          <div className="preview__card">
            <div className="preview__card--text">
              <div className="preview__card--stick js-stick stick-border-cold">
                <h1 className="js-preview-text js-preview-name preview__card--name name-cold">
                  {this.props.data.name || 'Nombre y Apellidos'}
                </h1>
                <h2 className="js-preview-text preview__card--job">{this.props.data.job || 'Job'}</h2>
              </div>
            </div>
            <div className="preview__img-container profile__image js__profile-image" style={{backgroundImage: `url(${this.props.data.fileUrl || previewImage})` }} ></div>
            <nav>
              <ul className="preview__contact">
                <LinkTemplate link={"tel:" + this.props.data.phone} class="fas fa-mobile-alt" />
                <LinkTemplate link={"mailto:" + this.props.data.email} class="far fa-envelope" />
                <LinkTemplate
                  link={"https://" + this.props.data.linkedin}
                  class="fab fa-linkedin-in"
                />
                <LinkTemplate
                  link={"https://github.com/" + this.props.data.github}
                  class="fab fa-github-alt"
                />
              </ul>
            </nav>
          </div>
        </div>
      </section>
    );
  }
}

export default Preview;
