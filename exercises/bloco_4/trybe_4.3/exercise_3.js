let n = 10;

for (let j = 0; j < n; j++) {
    let line = "";
    for (var i = 1; i <= n; i++) {
        if (i >= n - j) {
        line += "*";
        } else {
        line += " ";
        }
    }
    console.log(line);
}

