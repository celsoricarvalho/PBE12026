// EXERCÍCIO 10 — Programa principal

const entrada = require("readline-sync");

// Importando o módulo de manutenção
const manutencao = require("./funcoesManutencao");

console.log("=== SISTEMA DE MANUTENÇÃO INDUSTRIAL ===");

// Entradas de dados
const maquina = entrada.question("Nome da máquina: ");
const valorPecas = entrada.questionFloat("Valor das peças: R$ ");
const horas = entrada.questionFloat("Horas de serviço: ");
const meses = entrada.questionInt("Meses desde a última manutenção: ");

// 1. Calculamos o valor da mão de obra usando o módulo
const maoDeObra = manutencao.calcularMaoDeObra(horas);

// 2. Calculamos o valor total da manutenção
const total = manutencao.calcularTotal(valorPecas, horas);

// 3. Verificamos a situação da garantia
const garantia = manutencao.verificarGarantia(meses);

// Relatório final
console.log("\n=== RELATÓRIO DE MANUTENÇÃO ===");
console.log(`Máquina:          ${maquina}`);
console.log(`Peças:            R$ ${valorPecas.toFixed(2)}`);
console.log(`Mão de obra:      R$ ${maoDeObra.toFixed(2)}`);
console.log(`Total:            R$ ${total.toFixed(2)}`);
console.log(`Garantia:         ${garantia}`);
console.log("--------------------------------");