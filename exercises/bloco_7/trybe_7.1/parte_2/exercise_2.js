const longestWord = (phrase) => {
  const words = phrase.split(" ");
  let max = 0;
  let word = "";
  for (let i = 0; i < words.length; i += 1) {
    if (max < words[i].length) {
      max = words[i].length;
      word = words[i];
    }
  }
  console.log(word);
};

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"); // retorna 'aconteceu'
