import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Summary extends Component {
  state = {
    array: [],
    dietaries: ["v", "ve", "df", "gf", "n!", "rsf"]
  };

  static getDerivedStateFromProps(nextProps, state) {
    const arrayForEachDietaryType = state.dietaries.map(term => {
      return nextProps.array
        .map(meal => meal.dietaries)
        .reduce((a, b) => [...a, ...b], [])
        .filter(item => item === term);
    });

    return {
      array: arrayForEachDietaryType
    };
  }

  renderDietaryItem() {
    return this.state.array.map((item, key) => {
      if (item.length) {
        return (
          <span key={key} className="animate">
            {item.length}x <span className="dietary">{item[0]}</span>
          </span>
        );
      }
      return <span key={key} />;
    });
  }

  sumOfItems() {
    if (this.props.array.length === 1) {
      return <p>{this.props.array.length} item</p>;
    } else {
      return <p>{this.props.array.length} items</p>;
    }
  }

  render() {
    return (
      <div className="menu-summary">
        <div className="container">
          <div className="row">
            <div className="col-6 menu-summary-left">
              <span>{this.sumOfItems()}</span>
            </div>
            <div className="col-6 menu-summary-right">
              {this.renderDietaryItem()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Summary.propTypes = {
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
)(Summary);
