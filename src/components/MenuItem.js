import React, { Component } from "react";
import PropTypes from "prop-types";
import { Add } from "../actions/actions";
import { connect } from "react-redux";

class MenuItem extends Component {
  render() {
    let { name, dietaries } = this.props.details;

    return (
      <li className="item" onClick={() => this.props.Add(this.props.details)}>
        <h2>{name}</h2>
        <p>
          {dietaries.map(dietary => {
            return (
              <span className="dietary" key={dietary}>
                {dietary}
              </span>
            );
          })}
        </p>
      </li>
    );
  }
}

MenuItem.propTypes = {
  Add: PropTypes.func.isRequired,
  details: PropTypes.object.isRequired
};

export default connect(
  null,
  { Add }
)(MenuItem);
