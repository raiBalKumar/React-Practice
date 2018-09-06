import { combineReducers } from "redux";

import counterReducer from "./reducer_counter";

export default combineReducers({
  counter: counterReducer
});
