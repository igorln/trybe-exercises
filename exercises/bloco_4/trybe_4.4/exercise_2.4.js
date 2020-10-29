function maiorNome (array) {
  let nome = "";
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > nome.length) {
      nome = array[i];
    }
  }
  console.log(nome)
}

let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

maiorNome (teste)