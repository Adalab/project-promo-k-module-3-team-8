import React from 'react';
import './Preview.scss';

class Preview extends React.Component {
  render() {
    return (
      <section className="preview">
        <div className="preview__container">
          <button className="preview__reset js-reset">
            <i className="far fa-trash-alt"></i>Reset
          </button>
          <div className="preview__card">
            <div className="preview__card--text">
              <div className="preview__card--stick js-stick stick-border-cold">
                <h1 className="js-preview-text js-preview-name preview__card--name name-cold">
                  Nombre y Apellidos
                </h1>
                <h2 className="js-preview-text preview__card--job">Job</h2>
              </div>
            </div>
            <div className="preview__img-container profile__image js__profile-image"></div>
            <nav>
              <ul className="preview__contact">
                <li>
                  <a
                    className="js-preview-href icon-cold preview__contact--link"
                    href="enlace"
                    target="_blank"
                  >
                    <i className="fas fa-mobile-alt"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="js-preview-href icon-cold preview__contact--link"
                    href="enlace"
                    target="_blank"
                  >
                    <i className="far fa-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="js-preview-href icon-cold preview__contact--link"
                    href="enlace"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="js-preview-href icon-cold preview__contact--link"
                    href="enlace"
                    target="_blank"
                  >
                    <i className="fab fa-github-alt"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    );
  }
}

export default Preview;
