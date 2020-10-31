let numerosRomanos = {
  I : 1,
  V : 5,
  X : 10,
  L : 50,
  C : 100,
  D : 500,
  M : 1000
}

function letrasRomanas (palavra){ 
  let total = 0;

  for ( i = 0; i < palavra.length; i++) {
    if (numerosRomanos[palavra[i]] < numerosRomanos[palavra[i+1]]) {
      total += numerosRomanos[palavra[i+1]] - numerosRomanos[palavra[i]];
      i++;
    } else {
      total += numerosRomanos[palavra[i]];
    }
  }
  console.log(total);
}

letrasRomanas ("MCD")

