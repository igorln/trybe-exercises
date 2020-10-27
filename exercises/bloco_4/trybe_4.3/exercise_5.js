let n = 9;
let round = Math.round(n/2);

for (let j = 0; j < n; j = j + 2) {
    let line = "";
    for (let i = 1; i <= n; i++) {
        if (round - j/2 == i || i == round + j/2) {
            line += "*";
        } else if ( j == n - 1) {
            line += "*";
        }   else {
            line += " ";
        }
    }
    console.log(line);
    
}

