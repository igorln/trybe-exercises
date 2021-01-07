function random100 () {
  return Math.floor(Math.random() * 100);
}

test('random100', () => {
  random100 = jest.fn().mockImplementation((a, b) => a / b);

  expect(random100(10, 5)).toBe(2);
  expect(random100).toHaveBeenCalled();
  expect(random100).toHaveBeenCalledTimes(1);
})
