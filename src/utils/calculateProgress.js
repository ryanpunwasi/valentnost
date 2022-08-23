import { round } from "./round";

export const calculateProgress = practiceObj => {
  return practiceObj;
};

export const calculateMinimumNumberOfQuestions = numberOfElements => {
  let minimum =
    numberOfElements <= 10
      ? 50
      : numberOfElements <= 15
      ? 100
      : numberOfElements > 15
      ? 125
      : 50;

  return minimum;
};

export const calculateSeenRatio = (seenElements, totalElements) =>
  round(seenElements / totalElements, 4);

export const calculateNumberOfQuestionsAnsweredRatio = (
  answeredQuestions,
  minimumNumberOfQuestions
) => round(answeredQuestions / minimumNumberOfQuestions, 4);

export const calculateMasteryRatio = (
  answeredCorrect,
  answered,
  masteryRatio
) => {
  const ratioRaw = (answeredCorrect / answered) * (1 / masteryRatio);
  const ratioProcessed = ratioRaw > 1 ? 1 : round(ratioRaw, 4);
  return ratioProcessed;
};

export const calculateIncorrectRatio = incorrect => incorrect.length;
