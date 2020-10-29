function indiceDoMaior (array) {
  let menor = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] < menor) {
      menor = array[i];
    }
  }
  console.log(array.indexOf(menor))
}

let teste = [2, 4, 6, 7, 10, 0, -3]

indiceDoMaior (teste)