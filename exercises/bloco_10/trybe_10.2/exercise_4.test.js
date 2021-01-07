const getRepos = require('./exercise_4.js');

test('Check if the repository exists', () =>{
  const url = 'https://api.github.com/users/tryber/repos';
  return getRepos(url).then(result =>{
    expect(result).toContain('exercise-redux-thunk');
    expect(result).toContain('event-project-color-guess');
  });
});
