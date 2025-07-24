let nomes = ['Ana', 'Bruno', 'Carlos', 'Diana', 'Eduardo'];

let indiceCarlos = nomes.indexOf('Carlos');

if(indiceCarlos != -1){
    nomes[indiceCarlos] = 'Caio';
}

let indiceAna = nomes.indexOf('Ana');
if (indiceAna != -1) {
    nomes.splice(indiceAna, 1);
}

console.log(nomes);
