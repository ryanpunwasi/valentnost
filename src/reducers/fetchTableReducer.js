import { FETCH_TABLE } from "../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = null, action) => {
  switch (action.type) {
    case FETCH_TABLE:
      return action.payload.data;
    default:
      return state;
  }
};