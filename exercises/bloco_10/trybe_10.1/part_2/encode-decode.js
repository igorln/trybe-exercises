function encode(phrase) {
  let translate = {
    a : 1,
    e : 2,
    i : 3,
    o : 4,
    u : 5,
  }
  for (let i = 0; i < phrase.length; i++) {
    for (let key in translate) {
    if (phrase[i] === key) {
    phrase = phrase.replace(phrase[i], translate[key]);
    }
    }
  }
  return phrase
}

function decode(code) {
  let translate = {
    1 : "a",
    2 : "e",
    3 : "i",
    4 : "o",
    5 : "u",
  }
  for (let i = 0; i < code.length; i++) {
    for (let key in translate) {
    if (code[i] === key) {
    code = code.replace(code[i], translate[key]);
    }
    }
  }
  return code
}

const functions = { encode, decode }
module.exports = functions;
