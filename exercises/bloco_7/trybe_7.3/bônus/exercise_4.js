const getLargestNumber = (array) => {
  let largestNumber;
  for (let i = 0; i < array.length; i += 1) {
      if (array[i] > array[i + 1]) {
          largestNumber = array[i];
      } else if (array[i] > largestNumber) {
        largestNumber = array[i];
      }
  }
  return largestNumber;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;

const assert = require('assert');

assert.deepStrictEqual(getLargestNumber(parameter), result);