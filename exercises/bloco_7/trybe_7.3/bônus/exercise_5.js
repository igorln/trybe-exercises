const passwordVerifier = password => {
  let upper = "!";
  let lower = "!";
  let num = "!";
    const numbers = /[0-9]/g;
    for (i in password) {
      if (password[i].match(numbers)) {
        num = password[i];
      } else if (password[i].toLowerCase() === password[i]) {
        lower = password[i];
      } else if (password[i].toUpperCase() === password[i]) {
        upper = password[i];
      }
    }
  if (password.length <= 8) {
    return false;
  } else if (password == null) {
     return false;
  } else if (upper === "!" || lower === "!" || num === "!") {
    return false;
  } else {
    return true;
  }
}

const assert = require('assert');

assert.strictEqual(passwordVerifier(1234567), false)
assert.strictEqual(passwordVerifier(""), false)
assert.strictEqual(passwordVerifier('abcdefghijklmnopqrst'), false)
assert.strictEqual(passwordVerifier('ABCDEFGHIJKLMNOPQRST'), false)
assert.strictEqual(passwordVerifier('12345678'), false)
assert.strictEqual(passwordVerifier('ABCDefgs12'), true)