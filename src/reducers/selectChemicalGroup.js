import { SELECT_CHEMICAL_GROUP, CLEAR_FORM } from "../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = null, action) => {
  switch (action.type) {
    case SELECT_CHEMICAL_GROUP:
      return action.payload;
    case CLEAR_FORM:
      return null;
    default:
      return state;
  }
};