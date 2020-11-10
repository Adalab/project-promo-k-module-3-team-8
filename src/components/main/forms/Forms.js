import React from 'react';
import FormDesign from './FormDesign';
import FormFill from './FormFill';
import FormShare from './FormShare';
import Collapsable from './Collapsable';
import './Forms.scss';

class Forms extends React.Component {
  render() {
    return (
      <section className='forms'>
        <ul className='forms__list'>
          <Collapsable title='Diseña' icon='far fa-object-ungroup'>
            <FormDesign />
          </Collapsable>
          <Collapsable title='Rellena' icon='far fa-keyboard'>
            <FormFill />
          </Collapsable>
          <Collapsable title='Comparte' icon='fas fa-share-alt'>
            <FormShare />
          </Collapsable>
        </ul>
      </section>
    );
  }
}

export default Forms;
