import { CHANGE_MODE } from "../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = "name", action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return action.payload;
    default:
      return state;
  }
};
