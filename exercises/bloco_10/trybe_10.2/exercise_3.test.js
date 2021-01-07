const getUserName = require('./exercise_3.js');

test('Get the id:4 name:Mark', async () =>{
  const name = await getUserName(4);
  expect(name).toBe('Mark');
})

test("Get error when the id doesn't exist", async () =>{
  try {
    await getUserName(2);
  } catch (error) {
    expect(error).toEqual({ error: 'User with 2 not found.' })
  }
})
