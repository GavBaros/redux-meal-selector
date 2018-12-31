import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";
import Summary from "./components/Summary";
import MenuList from "./components/MenuList";
import SelectedItems from "./components/SelectedItems";

import rootReducer from "./reducers";

class App extends Component {
  render() {
    const store = createStore(rootReducer, {});
    return (
      <Provider store={store}>
        <div className="wrapper">
          <Summary />
          <div className="container menu-builder">
            <div className="row">
              <MenuList />
              <SelectedItems />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
