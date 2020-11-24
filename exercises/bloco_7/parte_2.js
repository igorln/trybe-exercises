const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addChaveValor = (objeto, chave, valor) => objeto[chave] = valor;

addChaveValor(lesson2, 'turno', 'Manhã');

const listarKeys = objeto => Object.keys(objeto);

const tamanhoObjeto = objeto => listarKeys(objeto).length;

const valoresObjeto = objeto => Object.values(objeto);

const allLessons = Object.assign({},{lesson1,lesson2,lesson3});

const somarEstudantes = _ => {
  let soma = 0;
  const chaves = Object.keys(allLessons);
  for (index in chaves){
    soma += allLessons[chaves[index]].numeroEstudantes;
  }
  return soma;
}
console.log(somarEstudantes());

const getValueByNumber = (objeto, posicao) => Object.values(objeto)[posicao];

console.log(getValueByNumber(lesson1, 0));

const verifyPair = (objeto, chave, valor) => {
  const pares = Object.entries(objeto);
  for (let index = 0; index < pares.length; index += 1){
    if (chave === pares[index][0]){
      if (valor === pares[index][1]) {
      return true;
      } else {
      return false
      }
    }
  }
};
console.log(verifyPair(lesson3, 'turno', 'noite'));

//Bônus

const alunosNaAula = (objeto, classe) => {
  let soma = 0;
  const chaves = Object.keys(objeto);
  for (index in chaves){
    if (objeto[chaves[index]].materia === classe){
    soma += objeto[chaves[index]].numeroEstudantes;
    }
  }
  return soma;  
}
console.log(alunosNaAula(allLessons, 'Matemática'))