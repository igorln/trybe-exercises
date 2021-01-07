const api = require('./exercise_6.js');

describe('testing request', () => {
  const apiURL = jest.spyOn(api, 'fetchURL');
  afterEach(apiURL.mockReset);

  test('testing if promise is resolved', async () => {
    apiURL.mockResolvedValue('request sucess');

    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    expect(apiURL()).resolves.toBe('request sucess');
    expect(apiURL).toHaveBeenCalledTimes(2);
  });

  test('testing if promise is rejected', async () => {
    apiURL.mockResolvedValue('request failed');

    expect(apiURL).toHaveBeenCalledTimes(0);
    expect(apiURL()).rejects.toMatch('request failed');
    expect(apiURL).toHaveBeenCalledTimes(1);
  });
})