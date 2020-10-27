let valorCusto = 20;
let valorVenda = 30;
let unidadesVendidas = 1000;

let impostoSobreOCusto = 0.2 * valorCusto;

let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal;

let lucroTotal = unidadesVendidas * lucro;

if (valorCusto < 0 || valorVenda < 0) {
    console.log("ERRO - valor menor que 0!");
} else {
    console.log(lucroTotal);
}