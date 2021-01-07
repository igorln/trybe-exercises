function random100 () {
  return Math.floor(Math.random() * 100);
}

test('random100', () => {
  random100 = jest.fn().mockImplementation((a, b, c) => a * b * c);

  expect(random100(10, 5, 2)).toBe(100);
  expect(random100).toHaveBeenCalled();
  expect(random100).toHaveBeenCalledTimes(1);

  random100.mockReset().mockImplementation(a => a * 2);
  expect(random100(3)).toBe(6);
  expect(random100).toHaveBeenCalled();
  expect(random100).toHaveBeenCalledTimes(1);
})
