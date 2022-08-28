import { combineReducers } from "redux";
import selectElement from "./selectElementReducer";
import fetchTableReducer from "./fetchTableReducer";
import selectChemicalGroup from "./selectChemicalGroup";
import alertReducer from "./alertReducer";
import practiceReducer from "./practiceReducer";
import modeReducer from "./modeReducer";

export default combineReducers({
  element: selectElement,
  table: fetchTableReducer,
  group: selectChemicalGroup,
  alert: alertReducer,
  practice: practiceReducer,
  mode: modeReducer,
});
