import { capitalize } from "../utils/capitalize";

describe("capitalize", () => {
  it("returns 'Car' when given 'car' as an argument", () => {
    const actual = capitalize("car");
    const expected = "Car";
    expect(actual).toBe(expected);
  });

  it("returns an empty string when given an empty string as an argument", () => {
    const actual = capitalize("");
    const expected = "";
    expect(actual).toBe(expected);
  });

  it("returns the capitalized letter when given a letter as an argument", () => {
    const actual = capitalize("z");
    const expected = "Z";
    expect(actual).toBe(expected);
  });

  it("returns 'Hello' when given 'hEllO' as an argument'", () => {
    const actual = capitalize("hEllO");
    const expected = "Hello";
    expect(actual).toBe(expected);
  });
});
