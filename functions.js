const functions = {
  sum: (a, b) => {
    return a + b;
  },

  subtract: (a, b) => {
    return a - b;
  },

  copyArr: (a) => {
    return [...a];
  },

  filterByTerm: (inputArr, searchTerm)=> {
    return inputArr.filter(function(arrayElement) {
      return arrayElement.url.match(searchTerm);
    });
  }
};

module.exports = functions;
