import React from "react";
import "./Forms.scss";

class Collapsable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleCollapse = this.handleCollapse.bind(this);
  }
  handleCollapse() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
    console.log(this.state.isOpen);
  }

  render() {
    const openClassName = this.state.isOpen ? "" : "collapsed";
    return (
      <li className="item">
        <div onClick={this.handleCollapse} className="item__header">
          <div className="item__header--title">
            <i className={this.props.icon + " item__header--icon"}></i>
            <h2>{this.props.title}</h2>
          </div>
          <i className="fas fa-angle-down js-arrow1"></i>
        </div>
        <div className={openClassName + " item__content " + this.props.colourClass}>
          {this.props.children}
        </div>
      </li>
    );
  }
}
export default Collapsable;
