// opcao 1 ; media simples de duas notas
// opcao 2 ; media ponderada de 3 notas con peso 2,3,5

function mediaSimples(nota1, nota2){
    return (nota1 + nota2) / 2;
}
function mediaponderada(n1, n2, n3){
    let m = (n1 * 2 + n2 * 3 + n3 * 5) / 10;
    return m;
}
let opcao = 1
 let media;
switch (opcao){
  case 1:
    media = mediaSimples(60, 70 );
    console.log(`media: ${media} pontos`);
    break;
    case 2:
        media = mediaponderada(60, 90, 40);
        console.log(`media: ${media} pontos`);
        break;
        default:
            console.log('opçao invalida');
            break;
            
        
    
}

