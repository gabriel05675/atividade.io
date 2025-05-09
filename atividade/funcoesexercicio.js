// exercicio 05)velaborar uma funçao 
// que verifique se o numero é par ou impar.

// exercicio 06) faça uma função para determinar se 
// o numero é positivo ou negativo.

// exercicio 07) faça uma função que receba o
// salário de um trabalhador e o empréstimo,
// verifique se o empréstimo é de até 20% do 
// salário do trabalhador, se for, o empréstimo
// deve ser aprovado, caso contrario, deve ser rejeitado.

function parimpar(n) {
if (n % 2 == 0) {
    return 'é par ';
 }
else {
    return ' é impar'
 }
}
console.log(parimpar(4));
