const uppercase = require('./exercise_1.js');

test('All the letters are uppercase', done =>{
  expect.assertions(1);
  uppercase('pokemon', (result) => {
    expect(result).toBe('POKEMON');
    done();
  });
})

test('The word change', done =>{
  expect.assertions(1);
  uppercase('pokemon', (result) => {
    expect(result).not.toBe('pokemon');
    done();
  });
})