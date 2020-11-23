const skills = ["SQL", "R", "JS", "CSS", "HTML"];

const replaceWord = (word) => {
  let phrase = "Tryber x aqui!"
  const wordsSplited = phrase.split("x");
  const part1 = `${wordsSplited[0]}${word}${wordsSplited[1]}
  Minhas cinco principais habilidades são:`
  skills.sort();
  let part2 = "";
  for (let i = 0; i < skills.length; i += 1) {
    part2 = `${part2}
    -${skills[i]}`
  }
  const result = `${part1}${part2}
  #goTrybe`;
  return result;
};

console.log(replaceWord('igor'))
