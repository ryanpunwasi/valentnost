import { HIDE_ALERT, SHOW_ALERT } from "../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = 'hide', action) => {
  switch (action.type) {
    case HIDE_ALERT:
      return 'hide';
    case SHOW_ALERT:
      return 'show';
    default:
      return state;
  }
};