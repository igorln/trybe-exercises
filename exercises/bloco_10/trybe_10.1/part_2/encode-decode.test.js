const { encode, decode } = require('./encode-decode.js');

test('Teste se encode e decode são funções;', () => {
  expect(typeof encode).toBe('function');
  expect(typeof decode).toBe('function');
})

test('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
  expect(encode('aeiou')).toBe('12345');
})

test('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
  expect(decode('12345')).toBe('aeiou');
})

test('Teste se as demais letras/números não são convertidos para cada caso', () => {
  expect(decode('0123456789')).toBe('0aeiou6789');
  expect(encode('abcdefghijklmoprstuvwxyz')).toBe('1bcd2fgh3jklm4prst5vwxyz');
})
