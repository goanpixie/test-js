function filterByTerm(inputArr, searchTerm) {
  if (!inputArr.length) throw Error('inputArr cannot be empty'); // new line
  const regex = new RegExp(searchTerm, 'i');
  return inputArr.filter(function (arrItem) {
    return arrItem.url.match(regex);
  });
}

module.exports = filterByTerm;
