import { combineReducers } from "redux";
import populateArray from "./populateArray";

const rootReducer = combineReducers({
  array: populateArray
});

export default rootReducer;
