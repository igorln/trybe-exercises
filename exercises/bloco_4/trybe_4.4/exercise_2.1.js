function verificarPalindrome(palavra) {
  let oposto = "";
  for (let i = 1; i <= palavra.length; i++) {
    oposto += palavra[palavra.length - i];
  }
  if (oposto == palavra) {
    console.log("true");
  } else {
    console.log("false");
  }
}

verificarPalindrome("arara")

verificarPalindrome("desenvolvimento")