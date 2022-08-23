import {
  START_PRACTICE,
  END_PRACTICE,
  CHECK_ANSWER,
  NEXT_QUESTION,
} from "../actions/types";
import _ from "lodash";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = null, action) => {
  switch (action.type) {
    case START_PRACTICE:
      const currentElement = _.sample(action.payload); // Select random element from payload
      return {
        hasAnswered: false,
        answered: 0,
        correct: 0,
        incorrect: [],
        seen: [currentElement.name], // Initialize seen as array containing current element
        currentElement,
        elements: action.payload,
        prevElement: null,
        answeredCorrect: null,
        progress: 0,
      };
    case END_PRACTICE:
      return null;
    case CHECK_ANSWER:
      if (action.payload.isCorrect) {
        if (_.some(state.incorrect, action.payload.currentElement)) {
          let newIncorrect = _.filter(state.incorrect, n => {
            return n !== action.payload.currentElement;
          });
          return {
            ...state,
            hasAnswered: true,
            correct: state.correct + 1,
            answered: state.answered + 1,
            incorrect: newIncorrect,
            answeredCorrect: true,
          };
        } else {
          return {
            ...state,
            hasAnswered: true,
            answered: state.answered + 1,
            correct: state.correct + 1,
            answeredCorrect: true,
          };
        }
      } else {
        if (!_.some(state.incorrect, action.payload.currentElement)) {
          return {
            ...state,
            hasAnswered: true,
            answered: state.answered + 1,
            incorrect: [...state.incorrect, action.payload.currentElement],
            answeredCorrect: false,
          };
        } else {
          return {
            ...state,
            answered: state.answered + 1,
            hasAnswered: true,
            answeredCorrect: false,
          };
        }
      }
    case NEXT_QUESTION:
      let nextElement;
      let randomElement = _.sample(state.elements);
      let randomElementFromIncorrect = _.sample(state.incorrect);
      while (true) {
        if (
          randomElementFromIncorrect &&
          randomElementFromIncorrect.number !==
            action.payload.currentElement.number
        ) {
          nextElement = randomElementFromIncorrect;
          break;
        } else {
          if (randomElement.number !== action.payload.currentElement.number) {
            nextElement = randomElement;
            break;
          } else {
            randomElement = _.sample(state.elements);
          }
        }
      }

      // Update seen state if new element is seen
      const seen = _.includes(state.seen, nextElement.name)
        ? [...state.seen]
        : [...state.seen, nextElement.name];

      return {
        ...state,
        hasAnswered: false,
        prevElement: action.payload.currentElement,
        currentElement: nextElement,
        answeredCorrect: null,
        seen,
      };
    default:
      return state;
  }
};
