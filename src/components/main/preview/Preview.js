import React from 'react';
import './Preview.scss';
import LinkTemplate from './LinkTemplate';

class Preview extends React.Component {
  render() {
    return (
      <section className='preview'>
        <div className='preview__container'>
          <button className='preview__reset js-reset'>
            <i className='far fa-trash-alt'></i>Reset
          </button>
          <div className='preview__card'>
            <div className='preview__card--text'>
              <div className='preview__card--stick js-stick stick-border-cold'>
                <h1 className='js-preview-text js-preview-name preview__card--name name-cold'>
                  Nombre y Apellidos
                </h1>
                <h2 className='js-preview-text preview__card--job'>Job</h2>
              </div>
            </div>
            <div className='preview__img-container profile__image js__profile-image'></div>
            <nav>
              <ul className='preview__contact'>
                <LinkTemplate link='enlace' class='fas fa-mobile-alt' />
                <LinkTemplate link='enlace' class='far fa-envelope' />
                <LinkTemplate link='enlace' class='fab fa-linkedin-in' />
                <LinkTemplate link='enlace' class='fab fa-github-alt' />
              </ul>
            </nav>
          </div>
        </div>
      </section>
    );
  }
}

export default Preview;
