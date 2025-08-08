let array = [];

console.log("tipo do meu array: " + typeof(array));

function adiciornarNumero(){
    let input = document.querySelector('#numero');
    let n = parseInt(input.value);
    // alert(n)
    let exibirArray = document.querySelector
    ('#exibir-array');
    // se N for não numerico.mostrara um alert e encerrara a funçao
    if (isNaN(n)){
        alert('digite um número valido!');
        return;
    }
    array.push(n);

    // limpar campo de entrada
    input.value = '';

    console.log(array);
    exibirArray.innerHTML = `array: ${array} <br/>tamanho do array ${array.length}`;
}