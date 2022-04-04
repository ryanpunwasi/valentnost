import { SELECT_ELEMENT, CLEAR_FORM } from "../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = null, action) => {
  switch (action.type) {
    case SELECT_ELEMENT:
      return action.payload;
    case CLEAR_FORM:
      return null;
    default:
      return state;
  }
};