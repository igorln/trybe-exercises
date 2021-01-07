const searchEmployee = require('./exercise_1')

test('checar se a função searchEmployee existe', () => {
  expect(typeof searchEmployee).toBe('function');
})

test('checar se a função searchEmployee funciona', () => {
  expect(searchEmployee('8579-6', 'firstName')).toEqual({
    id: '8579-6',
    firstName: 'Ana',
  });
})

test('checar se a função searchEmployee funciona', () => {
  expect(searchEmployee('1256-4', 'specialities')).toEqual({
    id: '1256-4',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  });
})

test('checar se a função searchEmployee funciona', () => {
  expect(searchEmployee('4678-2', 'lastName')).toEqual({
    id: '4678-2',
    lastName: 'Dodds',
  });
})

test('Caso o id não conste no quadro de funcionários, sua função deve retornar o erro "ID não identificada"', () => {
  expect(() => {searchEmployee('0007-2', 'lastName')}).toThrowError(new Error('ID não identificada'));
})

test('Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível"', () => {
  expect(() => {searchEmployee('4678-2', 'nickname')}).toThrowError(new Error('Informação indisponível'));
})
