import { 
  SELECT_ELEMENT,
  FETCH_TABLE,
  SELECT_CHEMICAL_GROUP,
  CLEAR_FORM,
  SHOW_ALERT,
  HIDE_ALERT,
  START_PRACTICE,
  CHECK_ANSWER,
  NEXT_QUESTION,
  END_PRACTICE
} from "./types";

import history from '../history';
import periodicTable from '../apis/periodicTable';
import { buildElementsFromGroup } from '../utils/buildElementsFromGroup';

export const selectElement = element => {
  return {
    type: SELECT_ELEMENT,
    payload: element
  }
}

export const fetchTable =  () => {
  return async function(dispatch, getState) {
    const response = await periodicTable.get('/');
  
    dispatch({ type: FETCH_TABLE, payload: response });
  }
}

export const selectChemicalGroup = (group) => {
  return {
    type: SELECT_CHEMICAL_GROUP,
    payload: group
  }
}

export const clearForm = () => {
  return {
    type: CLEAR_FORM
  }
}

export const hideAlert = () => {
  return {
    type: HIDE_ALERT
  }
}

export const showAlert = () => {
  return {
    type: SHOW_ALERT
  }
}

export const startPractice = (group, table) => async (dispatch) => {
  dispatch({
    type: START_PRACTICE,
    payload: buildElementsFromGroup(group, table)
  });

  history.push('/practice');
}

export const checkAnswer = (isCorrect, currentElement) => {
  return {
    type: CHECK_ANSWER,
    payload: {
      isCorrect, 
      currentElement
    }
  }
}

export const nextQuestion = (isCorrect, currentElement) => {
  return {
    type: NEXT_QUESTION,
    payload: {
      isCorrect,
      currentElement
    }
  };
}

export const endPractice = () => {
  return {
    type: END_PRACTICE
  }
}