// 2 - Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor.
// No final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados.

let numeros = [];

for (let i = 0; i < 10; i++) {
  numeros[i] = prompt(`Digite o número ${i + 1}`);
}

for (let i = 0; i < 10; i++) {
  if (numeros[i] % 2 == 0) {
    console.log(`Números pares encontrados: ${numeros[i]} na posição ${i}`);
  }
}
