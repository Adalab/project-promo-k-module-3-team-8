import React from 'react';
import PropTypes from 'prop-types';

class LinkTemplate extends React.Component {
  render() {
    return (
      <>
        <li>
          <a
            className={` icon-${this.props.palette} preview__contact--link`}
            href={this.props.link}
            target='_blank'
            rel='noreferrer'
          >
            <i className={this.props.class}></i>
          </a>
        </li>
      </>
    );
  }
}

LinkTemplate.propTypes = {
  palette: PropTypes.number.isRequired,
  class: PropTypes.string.isRequired,
};

LinkTemplate.defaultProps = {
  href: '#',
};

export default LinkTemplate;
