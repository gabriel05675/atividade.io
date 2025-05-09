let n1 = 100
let n2 = 80
let n3 =60
let n4 =0
let media=(n1 + n2 + n3 + n4)/4;

if(media >=60){

    console.log("esta aprovado")
}
else if (media >= 40 && media < 60){
    console.log("o aluno estar recuperaçao, a media eh", media)
}else{
    console.log("o aluno esta reprovado a media eh", media)
}