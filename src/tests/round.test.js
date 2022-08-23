import { round } from "../utils/round";

describe("round", () => {
  it("returns 1.5 when given the arguments 1.45 and 1", () => {
    const actual = round(1.45, 1);
    const expected = 1.5;
    expect(expected).toBe(actual);
  });

  it("returns 1.4 when given the arguments 1.44 and 1", () => {
    const actual = round(1.44, 1);
    const expected = 1.4;
    expect(expected).toBe(actual);
  });

  it("returns 30.6123 when given the arguments 30.612314543 and 4", () => {
    const actual = round(30.612314543, 4);
    const expected = 30.6123;
    expect(expected).toBe(actual);
  });

  it("returns 31 when given the arguments 30.612314543 and 0", () => {
    const actual = round(30.612314543, 0);
    const expected = 31;
    expect(expected).toBe(actual);
  });

  it("returns 29.9999 when given the arguments 29.99994 and 4", () => {
    const actual = round(29.99994, 4);
    const expected = 29.9999;
    expect(expected).toBe(actual);
  });
});
