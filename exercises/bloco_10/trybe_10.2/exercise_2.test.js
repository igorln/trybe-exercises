const getUserName = require('./exercise_2.js');

test('Get the id:4 name:Mark', () =>{
  expect.assertions(1);
  return getUserName(4).then(person =>
    expect(person).toBe('Mark'));
})

test("Get error when the id doesn't exist", () =>{
  expect.assertions(1);
  return getUserName(2).catch(error =>
    expect(error).toEqual({ error: 'User with 2 not found.' }));
})
