describe("Quirks", () => {
  xdescribe("Likehet #1", () => {
    it("true eller false? #1", () => {
      const actual = 1 == "1";
      const expected = "";
      expect(actual).toEqual(expected);
    });
    it("true eller false? #2?", () => {
      const actual = "abc" == true;
      const expected = "";
      expect(actual).toEqual(expected);
    });
    it("true eller false? #2,5?", () => {
      const actual = !!"abc";
      const expected = "";
      expect(actual).toEqual(expected);
    });
    it("true eller false? #3", () => {
      const actual = 0 == [];
      const expected = "";
      expect(actual).toEqual(expected);
    });
    it("true eller false? #3", () => {
      const actual = "0" == [];
      const expected = "";
      expect(actual).toEqual(expected);
    });
  });
  xdescribe("likhet #2", () => {
    it("true eller false? #1", () => {
      const actual = 1 === "1";
      const expected = "";
      expect(actual).toEqual(expected);
    });
    it("true eller false? #2?", () => {
      const actual = 1 === "1";
      const expected = "";
      expect(actual).toEqual(expected);
    });
    it("true eller false? #3", () => {
      const actual = 0 === [];
      const expected = "";
      expect(actual).toEqual(expected);
    });
    it("true eller false? #3", () => {
      const actual = "0" === [];
      const expected = "";
      expect(actual).toEqual(expected);
    });
  });
  describe("likhet #3", () => {
    xit("true eller false? #1", () => {
      const actual = [] == [];
      const expected = "";
      expect(actual).toEqual(expected);
    });
    xit("true eller false? #2?", () => {
      let arr = [];
      const actual = arr == arr;
      const expected = "";
      expect(actual).toEqual(expected);
    });
    xit("true eller false? #3?", () => {
      const actual = [] == ![];
      const expected = "";
      expect(actual).toEqual(expected);
    });
    xit("true eller false? #4", () => {
      const actual = function () {} == function () {};
      const expected = false;
      expect(actual).toEqual(expected);
    });
    xit("true eller false? #5?", () => {
      let func = function () {};

      const actual = func == func;
      const expected = "";
      expect(actual).toEqual(expected);
    });
  });
  describe("quirks #1", () => {
    xit("hva blir svaret?", () => {
      const actual = "9" - 1;
      const expected = "";
      expect(actual).toEqual(expected);
    });
    xit("hva blir svaret?", () => {
      const actual = "9" + 1;
      const expected = "";
      expect(actual).toEqual(expected);
    });
    xit("hva blir svaret?", () => {
      const actual = 0.02 + 0.01;
      const expected = 0.03;
      expect(actual).toEqual(expected);
    });
    xit("hva blir svaret?", () => {
      const actual = 0.02 + 0.01 === 0.3;
      const expected = "";
      expect(actual).toEqual(expected);
    });
  });
});
