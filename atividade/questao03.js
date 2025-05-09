let salario = 5001;

if(salario <= 1000){
    console.log("aliquota de 7%");
}
else if (salario >= 1001 && salario <= 2500){
    console.log("aliquota de 14%");
}
else if (salario >= 2501 && salario <= 3500){
    console.log("aliquota de 21%");
}
else if (salario >= 3001 && salario <= 9000){
    console.log("aliquota de 27,5%");
}
else {
    console.log("aliquota de 32%");

}