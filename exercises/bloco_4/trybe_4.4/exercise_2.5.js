function moda (array) {
  let moda = 0;
  let qtdModa = 0;
  for (let i = 0; i < array.length; i++) {
    let qtdTest = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        qtdTest += 1;
      }
      if (qtdTest > qtdModa) {
        qtdModa = qtdTest;
        moda = array[i];
      }
    }
  }
  console.log(moda)
}

let teste = [2, 3, 2, 5, 8, 2, 3]

moda (teste)