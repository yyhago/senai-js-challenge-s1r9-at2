// 4) Peça ao usuário para digitar 10 números e armazene em um vetor.
// Depois, crie um novo vetor removendo os valores duplicados. Exiba o vetor original e o vetor sem duplicatas.

let numerosOriginais = [];
let numerosUnicos = [];
let proximoIndice = 0;


for(let i = 0; i < 10; i++){
    numerosOriginais[i] = prompt(`Digite o ${i+1} número`);
}

for (let i = 0; i < numerosOriginais.length; i++) {
    let numeroAtual = numerosOriginais[i];
    let encontreiDuplicado = false;
    
    for (let j = 0; j < proximoIndice; j++) {
        if (numeroAtual === numerosUnicos[j]) {
            encontreiDuplicado = true;
            break;
        }
    }
    
    
    if (!encontreiDuplicado) {
        numerosUnicos[proximoIndice] = numeroAtual;
        proximoIndice++;
    }
}

console.log("Array original:", numerosOriginais);
console.log("Array sem duplicados:", numerosUnicos);