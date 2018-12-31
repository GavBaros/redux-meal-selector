import React, { Component } from "react";
import PropTypes from "prop-types";
import { Delete } from "../actions/actions";
import { connect } from "react-redux";

class SelectedItems extends Component {
  deleteItem = id => {
    let indexOfItemToDelete = this.props.array.findIndex(item => {
      return item.id === id;
    });

    this.props.Delete(this.props.array, indexOfItemToDelete);
  };

  renderDietaries() {
    return this.props.details.dietaries.map(dietary => {
      return (
        <span className="dietary" key={dietary}>
          {dietary}
        </span>
      );
    });
  }

  render() {
    let { id, name } = this.props.details;

    return (
      <li className="item" key={id}>
        <h2>{name}</h2>
        <p>{this.renderDietaries()}</p>
        <button
          className="remove-item"
          onClick={() => {
            this.deleteItem(id);
          }}
        >
          x
        </button>
      </li>
    );
  }
}

SelectedItems.propTypes = {
  Delete: PropTypes.func.isRequired,
  array: PropTypes.array.isRequired,
  details: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    array: state.array
  };
};

export default connect(
  mapStateToProps,
  { Delete }
)(SelectedItems);
