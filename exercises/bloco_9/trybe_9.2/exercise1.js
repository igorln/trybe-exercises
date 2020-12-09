const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const jokeContainter = document.getElementById('jokeContainer')
  const addJoke = joke => jokeContainter.innerHTML = joke; 

  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => addJoke(data.joke));
};

window.onload = () => fetchJoke();