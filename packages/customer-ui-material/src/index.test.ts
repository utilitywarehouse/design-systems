import UIModule from "./index";

describe("UI module", () => {
  describe("getValue", () => {
    test("When the key is 'test', the value returned is 'success'", () => {
      expect(UIModule.getValue("test")).toEqual("success");
    });

    test("When the key is unknown, the value returned is 'failed'", () => {
      expect(UIModule.getValue("unknown")).toEqual("failed");
    });
  });
});
