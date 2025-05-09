// exercicio 01) faça um programa que leia 3 numeros
//  inteiros e apresente o menor dele.
// exercicio 02) faça um programa um que leia um numero
// e mostre se ele é par ou impar.
// exercicio 03) faça um programa que leia 3 
// numeros e mostre se o valor de sua soma par ou impar.
// exercicio 04) faça um programa que leis um numero
// e mostre se ele é positivo ou negativo.

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


