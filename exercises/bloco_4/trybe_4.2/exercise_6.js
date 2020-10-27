let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = [];

for (var i = 0; i <numbers.length; i++) {
    if (numbers[i] % 2 == 1){
        impar.push(numbers[i]);
    }
}

if (impar == null) {
    console.log("Nenhum valor ímpar encontrado")
} else {
    console.log(impar);
}