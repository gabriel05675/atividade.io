let nomes = ['Azul', 'vermelho', 'Amarelo'];

let indiceAmarelo = nomes.indexOf('Amarelo');

if(indiceAmarelo != -1){
    nomes.push('Roxo');
}

let indiceAzul = nomes.indexOf('Azul');
if (indiceAzul != -1) {
    nomes.splice(indiceAzul, 1);
}

console.log(nomes);
