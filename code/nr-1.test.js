xdescribe("#1", () => {
  xit("Tell elementene i arrayet slik at acual blir lik expected", () => {
    const actual = [1, 2, 3, 4, 5];
    const expected = 5;
    expect(actual).toEqual(expected);
  });

  xit("Endre på testen slik at summen blir korrekt", () => {
    const actual = "1" + "1";
    const expected = "";
    expect(actual).toEqual(expected);
  });

  xit("manipuler stringen slik at actual blir lik expected", () => {
    const actual = "en to tre fire";
    const expected = "tre";
    expect(actual).toEqual(expected);
  });

  xit("manipuler arrayet slik at actual blir lik expected", () => {
    const actual = [1, 2, 3, 4, 5];
    const expected = [5, 4, 3, 2, 1];
    expect(actual).toEqual(expected);
  });

  xit("manipuler begge arrays slik at actual blir lik expected", () => {
    const array1 = [2, 4, 6];
    const array2 = [3, 1, 5];
    //array1.concat(array2).sort((a, b) => a - b)
    const actual = [];
    const expected = [1, 2, 3, 4, 5, 6];
    expect(actual).toEqual(expected);
  });
  xit("summer innholdet i begge arrays", () => {
    const array1 = [2, 4, 6];
    const array2 = [3, 1, 5];
    //array1.concat(array2).reduce((acc, a) => acc + a, 0)
    const actual = "";
    const expected = "summen av array1 og array2";
    expect(actual).toEqual(expected);
  });
  xit("ta vekk 3 tallet fra arrayen", () => {
    const array = [3, 1, 5];
    //filter((item) => item !== 3)
    const actual = array;
    const expected = [1, 5];
    expect(actual).toEqual(expected);
  });

  xit("ta vekk 3 tallet fra arrayen", () => {
    const remove = [1, 2, 9, 10];
    //.filter((item) => !remove.includes(item))
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const actual = array;
    const expected = [3, 4, 5, 6, 7, 8];
    expect(actual).toEqual(expected);
  });
});
