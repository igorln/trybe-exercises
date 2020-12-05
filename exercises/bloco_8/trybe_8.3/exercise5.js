
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((result, name) => result + name.toLowerCase().split('a').length - 1, 0)}

assert.deepStrictEqual(containsA(), 20);