const func = require('./exercise_4.js');
jest.mock('./exercise_4.js');

test('exercise 4', () => {
  func.upperText.mockImplementation( text => text.toLowerCase() );
  func.firstLetter.mockImplementation( text => text.charAt(text.length - 1) );
  func.concat.mockImplementation( (word1 , word2, word3) => word1 + word2 + word3);

  expect(func.upperText('POKEMON')).toBe('pokemon');
  expect(func.firstLetter('007')).toBe('7');
  expect(func.concat('Rio ', 'de ', 'Janeiro')).toBe('Rio de Janeiro');
})
