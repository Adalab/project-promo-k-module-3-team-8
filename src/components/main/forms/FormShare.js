import React from 'react';

class FormShare extends React.Component {
  render() {
    return (
      <>
        <form className='share js-share'>
          <i className='far fa-id-card share__icon'></i>
          <input
            className='js-submit share__text'
            type='button'
            value='Crear Tarjeta'
          />
        </form>

        <div className='share-url js-share-url hidden'>
          <div className='share-url__container'>
            <h3 className='share-url__title'>La tarjeta ha sido creada:</h3>
            <a
              className='js-response share-url__link'
              target='_blank'
              rel='noreferrer'
              href='enlace'
            ></a>
            <a
              className='share-url__link--share'
              target='_blank'
              rel='noreferrer'
              href='https://twitter.com/Adalab_Digital'
            >
              <i className='fab fa-twitter share-url__link--twitter'></i>
              Compartir en twitter{' '}
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default FormShare;
