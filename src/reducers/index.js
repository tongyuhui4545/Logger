import { combineReducers } from "redux";
import logReducer from "./logReducer";
import techRecucer from "./techReducer";

export default combineReducers({
  log: logReducer,
  tech: techRecucer,
});
