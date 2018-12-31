import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SelectedItem from "./SelectedItem";

class SelectedItems extends Component {
  renderItems() {
    return this.props.array.reverse().map((selected, key) => {
      return <SelectedItem details={selected} key={key} />;
    });
  }

  render() {
    return (
      <div className="col-8">
        <h2>Menu preview</h2>
        <ul className="menu-preview">{this.renderItems()}</ul>
      </div>
    );
  }
}

SelectedItems.propTypes = {
  array: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    array: state.array
  };
};

export default connect(
  mapStateToProps,
  null
)(SelectedItems);
