import { round } from "./round";

const MASTERY_RATIO = 0.8;

export const calculateProgress = practice => {
  const seenRatio = calculateSeenRatio(
    practice.seen.length,
    practice.elements.length
  );
  const minimum = calculateMinimumNumberOfQuestions(practice.elements.length);
  const minimumQuestionsRatio = calculateNumberOfQuestionsAnsweredRatio(
    practice.answered,
    minimum
  );

  const masteryRatio = calculateMasteryRatio(
    practice.correct,
    practice.answered,
    MASTERY_RATIO
  );

  const incorrectRatio = calculateIncorrectRatio(practice.incorrect);

  const progressRaw =
    (seenRatio + minimumQuestionsRatio * masteryRatio) / (2 + incorrectRatio);
  const progress = progressRaw > 1 ? 1 : progressRaw;
  return progress;
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
  const ratioProcessed = ratioRaw > 1 ? 1 : !ratioRaw ? 0 : round(ratioRaw, 4);
  return ratioProcessed;
};

export const calculateIncorrectRatio = incorrect => incorrect.length;
