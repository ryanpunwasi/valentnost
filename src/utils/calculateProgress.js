import { round } from "./round";

const PASSING_GRADE = 0.8; // Percent of questions answered correctly that is needed to achieve mastery

/**
 * Returns a number representing the progress of a practice session
 * @param {Object} practice An object with a seen {Array}, elements {Array}, and answered {Integer} property
 * @returns {Number} A Number——either a float or an integer——that represents the progress of a practice session.
 */

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
    PASSING_GRADE
  );

  const incorrectRatio = calculateIncorrectRatio(practice.incorrect);

  const progressRaw =
    (seenRatio + minimumQuestionsRatio * masteryRatio) / (2 + incorrectRatio);
  const progress = progressRaw > 1 ? 1 : progressRaw;
  return progress;
};

/**
 * Returns the minimum number of questions that a user must answer to achieve mastery
 * @param {Number} numberOfElements An integer representing the total number of elements to be tested in a practice session
 * @returns {Number} An integer representing the minimum number of questions that a user must answer to achieve mastery
 */

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

/**
 * Returns the ratio of elements seen to total number of elements to be tested, expressed as a float or integer.
 * @param {Number} seenElements An integer representing the number of unique elements the user has seen
 * @param {Number} totalElements An integer representing the number of total elements to be tested in a practice session
 * @returns {Number} A number which represents the percentage of elements the user has seen relative to the total number of elements to be tested.
 */

export const calculateSeenRatio = (seenElements, totalElements) =>
  round(seenElements / totalElements, 4);

/**
 * Returns a number representing the percentage of questions answered relative to the minimum number of questions a user must answer to achieve mastery
 * @param {Number} answeredQuestions An integer representing the number of questions the user has answered
 * @param {Number} minimumNumberOfQuestions An integer representing the minimum number of questions a user must answer to achieve mastery
 * @returns {Number} A number representing the percentage of questions answered relative to the minimum number of questions a user must answer to achieve mastery
 */

export const calculateNumberOfQuestionsAnsweredRatio = (
  answeredQuestions,
  minimumNumberOfQuestions
) => round(answeredQuestions / minimumNumberOfQuestions, 4);

/**
 * Return a number representing the users' mastery ratio
 * @param {Number} answeredCorrect An integer representing the number of questions the user has answered correctly
 * @param {Number} answered An integer representing the number of questions that the user has answered
 * @param {Number} passingGrade A number representing the percentage of questions a user must answer correctly to acheive mastery
 * @returns {Number} A number between 0 and 1 ()inclusive that represents the users' mastery ratio.
 */

export const calculateMasteryRatio = (
  answeredCorrect,
  answered,
  passingGrade
) => {
  const ratioRaw = (answeredCorrect / answered) * (1 / passingGrade);
  const ratioProcessed = ratioRaw > 1 ? 1 : !ratioRaw ? 0 : round(ratioRaw, 4);
  return ratioProcessed;
};

export const calculateIncorrectRatio = incorrect => incorrect.length;
