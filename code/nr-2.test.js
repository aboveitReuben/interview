describe("Scopes and closures", () => {
  describe("Scoping", () => {
    xit("Hva er expected verdi her?", () => {
      var text = "hello world";
      var text = "how are you";

      const actual = text;
      const expected = "?";
      expect(actual).toEqual(expected);
    });

    xit("Hva er riktig her", () => {
      function sayHello() {
        const text = "hello world";
        expect(text).toEqual("hello world");
        return text;
      }
      expect(sayHello()).toEqual("hello world");
      expect(text).toEqual("hello world");
    });

    xit("Vil dette fungere?", () => {
      sayHello();
      function sayHello() {
        return "hello world";
      }

      expect(sayHello()).toEqual("hello world");
    });
    xit("Vil dette fungere?", () => {
      sayHello();
      const sayHello = function () {
        return "hello world";
      };

      expect(sayHello()).toEqual("hello world");
    });

    xit("Hva er forventet oppførsel her?", () => {
      function outerFunction() {
        const outer = "Jeg er på utsiden";

        function innerFunction() {
          let inner = "Jeg er på innsiden";
          expect(outer).toEqual("Jeg er på utsiden");
          return inner;
        }

        expect(inner).toEqual(innerFunction());
      }
      outerFunction();
    });
  });
  describe("Closures", () => {
    beforeEach(() => {
      jest.useFakeTimers();
      jest.spyOn(global, "setTimeout");
    });
    xit("Hvordan kan vi lese verdier fra funksjoner som returnerer funksjoner? ", () => {
      function outerFunction() {
        var outer = "jeg kommer fra outerFunction";

        return function innerFunction() {
          return outer;
        };
      }

      const actual = "?";
      const expected = "jeg kommer fra outerFunction";
      expect(actual).toEqual(expected);
    });

    it("Hvordan kan vi bruke closures til å sette å gette private variabler", () => {
      function secret(secretCode) {
        return {
          saySecretCode() {
            return secretCode;
          },
        };
      }
      const hemmelighet = "xAsxcc¤56ws3F";
      const hemmeligheten = secret(hemmelighet);

      const actual = "?";
      const expected = hemmelighet;
      expect(actual).toEqual(expected);
    });
  });
});
