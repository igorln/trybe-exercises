const func = require('./exercise_4.js');

test('exercise 5', () => {
  const lowerText = jest.spyOn(func, 'upperText').mockImplementation( text => text.toLowerCase() );

  expect(lowerText('POKEMON')).toBe('pokemon');
  expect(lowerText).toHaveBeenCalled();
  expect(lowerText).toHaveBeenCalledTimes(1);

  func.upperText.mockRestore();

  expect(func.upperText('pokemon')).toBe('POKEMON');
})
