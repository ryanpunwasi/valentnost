import { apiGrouptoState } from "../utils/apiGroupToState";

describe("apiGrouptoState", () => {
  it("returns 'halogen' when given the argument 'halogens'", () => {
    const actual = apiGrouptoState("halogens");
    const expected = "halogen";
    expect(expected).toBe(actual);
  });

  it("returns 'post-transition metal' when given the argument 'post-transition-metals'", () => {
    const actual = apiGrouptoState("post-transition-metals");
    const expected = "post-transition metal";
    expect(expected).toBe(actual);
  });

  it("returns 'lanthanoid' when given the argument 'lanthanides'", () => {
    const actual = apiGrouptoState("lanthanides");
    const expected = "lanthanoid";
    expect(expected).toBe(actual);
  });

  it("returns 'actinoid' when given the argument 'actinides'", () => {
    const actual = apiGrouptoState("actinides");
    const expected = "actinoid";
    expect(expected).toBe(actual);
  });
});
