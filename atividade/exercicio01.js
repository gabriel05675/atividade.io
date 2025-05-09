// exercicio 01) faça um programa que leia 3 numeros
//  inteiros e apresente o menor dele.


let n1 = 60;
let n2 = 50;
let n3 = 80;
let menor;

if(n1 < n2){
    menor = n1;
}
else{
    menor = n2;
}
if(n3 < menor){
    menor = n3;
}
console.log(`o menor número é ${menor}`);


