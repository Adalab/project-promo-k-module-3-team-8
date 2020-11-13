import React from "react";

class LinkTemplate extends React.Component {
  render() {
    return (
      <>
        <li>
          <a
            className="js-preview-href icon-cold preview__contact--link"
            href={this.props.link}
            target="_blank"
            rel="noreferrer"
          >
            <i className={this.props.class}></i>
          </a>
        </li>
      </>
    );
  }
}

LinkTemplate.defaultProps = {
  href: "#",
};

export default LinkTemplate;
