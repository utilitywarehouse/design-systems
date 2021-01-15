import add from "./index";

describe("add", () => {
  test("4 + 9 returns 13", () => {
    expect(add(4, 9)).toEqual(13);
  });

  test("Infinity + Infinity throws an error", () => {
    expect(() => add(Infinity, Infinity)).toThrowError();
  });

  test("NaN + NaN throws an error", () => {
    expect(() => add(NaN, NaN)).toThrowError();
  });
});
