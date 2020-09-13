const { TestScheduler } = require('jest');

function filterByTerm(inputArr, searchTerm) {
  const regex = new RegExp(searchTerm, 'i');
  return inputArr.filter(function (arrItem) {
    return arrItem.url.match(regex);
  });
}

describe('filter function', () => {
  test('test fnx for matching input', () => {
    const input = [
      { site: 'fb', url: 'http://www.url1.com' },
      { site: 'amz', url: 'http://www.url2.com' },
      { site: 'ggl', url: 'http://www.link.com' }
    ];

    const output = [{ site: 'ggl', url: 'http://www.link.com' }];

    const output2 = [
      { site: 'fb', url: 'http://www.url1.com' },
      { site: 'amz', url: 'http://www.url2.com' }
    ];

    //account for all small letters for searching the term
    expect(filterByTerm(input, 'link')).toEqual(output);

    //account for Caps/small for searching the term
    expect(filterByTerm(input, 'LinK')).toEqual(output);

    //empty search string
    expect(filterByTerm(input, '')).toEqual(input);

    //empty search string
    expect(filterByTerm(input, 'URl')).toEqual(output2);
  });
});
