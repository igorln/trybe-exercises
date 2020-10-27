let salarioBruto = 3500;

let salarioBase = 0;
let salarioLiquido = 0;

// Cálculo de desconto do INSS
if (salarioBruto > 5189.82) {
  salarioBase = salarioBruto - 570.88;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  salarioBase = salarioBruto * 0.89;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  salarioBase = salarioBruto * 0.91;
} else {
  salarioBase = salarioBruto * 0.92;
}

// Cálculo de desconto do IR
if (salarioBase > 4664.68) {
  salarioLiquido = salarioBase - (salarioBase * 0.275 - 869.36);
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  salarioLiquido = salarioBase - (salarioBase * 0.225 - 636.13);
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  salarioLiquido = salarioBase - (salarioBase * 0.15 - 354.8);
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  salarioLiquido = salarioBase - (salarioBase * 0.075 - 142.8);
} else {
  salarioLiquido = salarioBase;
}

console.log("Salário líquido: R$ " + salarioLiquido)
