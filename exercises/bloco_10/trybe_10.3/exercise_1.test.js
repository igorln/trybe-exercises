function random100 () {
  return Math.floor(Math.random() * 100);
}

test('random100', () => {
  random100 = jest.fn().mockReturnValue(10);

  expect(random100()).toBe(10);
  expect(random100).toHaveBeenCalled();
  expect(random100).toHaveBeenCalledTimes(1);
})
