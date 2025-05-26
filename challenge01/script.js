// 1 - Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor.
// No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.

let nomes = [];
let nome;

for (let i = 0; i < 7; i++) {
  nome = prompt(`Digite o nome ${i + 1}`);
  nomes[i] = nome;
}

for (let i = 6; i >= 0; i--) {
  console.log(nomes[i]);
}
