import React from 'react';

class LinkTemplate extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <li>
          <a
            className="js-preview-href icon-cold preview__contact--link"
            href={this.props.link}
            target="_blank"
          >
            <i className={this.props.class}></i>
          </a>
        </li>
      </>
    );
  }
}

LinkTemplate.defaultProps = {
  href: 'enlace',
};

export default LinkTemplate;
