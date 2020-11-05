import React from 'react';
import FormDesign from './FormDesign';
import FormFill from './FormFill';
import FormShare from './FormShare';
import './Forms.scss';

class Forms extends React.Component {
  render() {
    return (
      <section className="forms">
        <ul className="forms__list">
          <FormDesign />
          <FormFill />
          <FormShare />
        </ul>
      </section>
    );
  }
}

export default Forms;
