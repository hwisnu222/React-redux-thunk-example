import { combineReducers } from "redux";

// list reducer
import count from "./counter.reducer";

const reducers = {
  countReducer: count,
};

// multiple reducer using combine reducer
export default combineReducers(reducers);
