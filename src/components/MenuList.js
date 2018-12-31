import React, { Component } from "react";
import MenuItem from "./MenuItem";
import Items from "../items";

class MenuList extends Component {
  renderItems() {
    return Items.map(item => {
      return <MenuItem details={item} key={item.id} />;
    });
  }
  render() {
    return (
      <div className="col-4">
        <ul className="item-picker">{this.renderItems()}</ul>
      </div>
    );
  }
}

export default MenuList;
