const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const compararNumeros = (a, b) => a - b;

oddsAndEvens.sort(compararNumeros);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);