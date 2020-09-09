const functions = require('./functions.js');

test('add propperly', () => {
  expect(functions.sum(1, 8)).toBe(9);
});
test('subtrsct properly', () => {
  expect(functions.subtract(1, 8)).toBe(-7);
});

test('copies a new array', () => {
  let arr = [1, 2, 3]
  expect(functions.copyArr(arr)).toEqual([1,2,3])
})

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);
  });
});