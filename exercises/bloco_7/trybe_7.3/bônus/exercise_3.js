const assert = require('assert');
// escreva a função removeMiddle aqui
const removeMiddle = array => {
  let result = [];
  const len = array.length;
  result.push(array[Math.round(len/2)-1]);
  array.splice(Math.round(len/2)-1, 1);
  return result;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);
