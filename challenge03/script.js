// 3 - Faça um algoritmo que preencha um vetor de 30 posições com números entre 1 e 15 sorteados pelo computador.
// Depois disso, peça para o usuário digitar um número (chave)
// e seu programa deve mostrar em que posições essa chave foi encontrada. Mostre também quantas vezes a chave foi sorteada.

let chave;
let contador = 0;

let numerosSorteado;
let numeros = [];

for (let i = 0; i < 30; i++) {
  numerosSorteados = Math.ceil(Math.random() * 15);
  numeros[i] = numerosSorteados;
}

chave = parseInt(prompt(`Digite um número (chave):`));

for (let i = 0; i < 30; i++) {
  if (chave === numeros[i]) {
    console.log(`Chave encontrada na posição ${i}`);
    contador++;
  }
}

console.log(`A chave ${chave} foi encontrada ${contador} vezes.`);
console.log("Números sorteados:", numeros);
