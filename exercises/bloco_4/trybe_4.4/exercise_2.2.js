function indiceDoMaior (array) {
  let maior = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  console.log(array.indexOf(maior))
}

let teste = [2, 4, 6, 7, 10, 0, -3]

indiceDoMaior (teste)