import {
  calculateProgress,
  calculateMinimumNumberOfQuestions,
  calculateSeenRatio,
  calculateNumberOfQuestionsAnsweredRatio,
  calculateMasteryRatio,
} from "../utils/calculateProgress";

import { round } from "../utils/round";
import { practice01, practice02, practice03 } from "../data/practice";

describe("calculateMinimumNumberOfQuestions", () => {
  it("returns 50 when given the argument 9", () => {
    const actual = calculateMinimumNumberOfQuestions(9);
    const expected = 50;
    expect(actual).toBe(expected);
  });

  it("returns 50 when given the argument 10", () => {
    const actual = calculateMinimumNumberOfQuestions(10);
    const expected = 50;
    expect(actual).toBe(expected);
  });

  it("returns 100 when given the argument 11", () => {
    const actual = calculateMinimumNumberOfQuestions(11);
    const expected = 100;
    expect(actual).toBe(expected);
  });

  it("returns 100 when given the argument 15", () => {
    const actual = calculateMinimumNumberOfQuestions(15);
    const expected = 100;
    expect(actual).toBe(expected);
  });

  it("returns 125 when given the argument 16", () => {
    const actual = calculateMinimumNumberOfQuestions(16);
    const expected = 125;
    expect(actual).toBe(expected);
  });
});

describe("calculateSeenRatio", () => {
  it("returns 1 when given two equal integers", () => {
    const actual = calculateSeenRatio(5, 5);
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it("returns 0.4 when given the arguments 2 and 5", () => {
    const actual = calculateSeenRatio(2, 5);
    const expected = 0.4;
    expect(actual).toBe(expected);
  });

  it("returns 0.3333 when given the arguments 1 and 3", () => {
    const actual = calculateSeenRatio(1, 3);
    const expected = 0.3333;
    expect(actual).toBe(expected);
  });
});

describe("calculateNumberOfQuestionsAnsweredRatio", () => {
  it("returns 1 when given two equal integers", () => {
    const actual = calculateNumberOfQuestionsAnsweredRatio(50, 50);
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it("returns 0.33 when given the arguments 33 and 100", () => {
    const actual = calculateNumberOfQuestionsAnsweredRatio(33, 100);
    const expected = 0.33;
    expect(actual).toBe(expected);
  });

  it("returns 0 when given the arguments 0 and any other integer", () => {
    const actual = calculateNumberOfQuestionsAnsweredRatio(0, 150);
    const expected = 0;
    expect(actual).toBe(expected);
  });
});

describe("calculateMasteryRatio", () => {
  it("returns 1 when answeredCorrect and answered are equal", () => {
    const actual = calculateMasteryRatio(50, 50, 0.8);
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it("returns 1 when answeredCorrect/answered and masteryRatio are equal", () => {
    const actual = calculateMasteryRatio(40, 50, 0.8);
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it("returns 0.875 when given the arguments 35, 50, 0.8", () => {
    const actual = calculateMasteryRatio(35, 50, 0.8);
    const expected = 0.875;
    expect(actual).toBe(expected);
  });

  it("returns 0 when answeredCorrect is 0", () => {
    const actual = calculateMasteryRatio(0, 50, 0.8);
    const expected = 0;
    expect(actual).toBe(expected);
  });
});

describe("calculateProgress", () => {
  it("returns 0.0476 when given practice01 mock data", () => {
    const actual = round(calculateProgress(practice01), 4);
    const expected = 0.0476;
    expect(actual).toBe(expected);
  });

  it("returns 1 when given practice02 mock data", () => {
    const actual = round(calculateProgress(practice02), 4);
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it("returns 0.6036 when given practice03 mock data", () => {
    const actual = round(calculateProgress(practice03), 4);
    const expected = 0.6036;
    expect(actual).toBe(expected);
  });
});
