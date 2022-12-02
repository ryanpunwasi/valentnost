import {
  SELECT_ELEMENT,
  FETCH_TABLE,
  SELECT_CHEMICAL_GROUP,
  CLEAR_FORM,
  SHOW_ALERT,
  HIDE_ALERT,
  CHANGE_MODE,
  START_PRACTICE,
  CHECK_ANSWER,
  UPDATE_PROGESS,
  NEXT_QUESTION,
  END_PRACTICE,
} from "./types";
import { table } from "../data/periodicTable";

import history from "../history";
import { buildElementsFromGroup } from "../utils/buildElementsFromGroup";
import { calculateProgress } from "../utils/calculateProgress";
import { round } from "../utils/round";

export const selectElement = element => {
  return {
    type: SELECT_ELEMENT,
    payload: element,
  };
};

export const fetchTable = () => {
  // return async function (dispatch, getState) {
  //   const response = await periodicTable.get("/");
  //   dispatch({ type: FETCH_TABLE, payload: response });
  // };
  return {
    type: FETCH_TABLE,
    payload: table,
  };
};

export const selectChemicalGroup = group => {
  return {
    type: SELECT_CHEMICAL_GROUP,
    payload: group,
  };
};

export const clearForm = () => {
  return {
    type: CLEAR_FORM,
  };
};

export const hideAlert = () => {
  return {
    type: HIDE_ALERT,
  };
};

export const showAlert = () => {
  return {
    type: SHOW_ALERT,
  };
};

export const startPractice = (group, table) => async dispatch => {
  dispatch({
    type: START_PRACTICE,
    payload: buildElementsFromGroup(group, table),
  });

  history.push("/practice");
};

export const checkAnswer = (isCorrect, currentElement) => {
  return {
    type: CHECK_ANSWER,
    payload: {
      isCorrect,
      currentElement,
    },
  };
};

export const updateProgress = practice => {
  const progress = round(calculateProgress(practice) * 100, 0);
  return {
    type: UPDATE_PROGESS,
    payload: {
      progress,
    },
  };
};

export const nextQuestion = (isCorrect, currentElement) => {
  return {
    type: NEXT_QUESTION,
    payload: {
      isCorrect,
      currentElement,
    },
  };
};

export const endPractice = () => {
  return {
    type: END_PRACTICE,
  };
};

export const changeMode = mode => {
  return {
    type: CHANGE_MODE,
    payload: {
      mode,
    },
  };
};
