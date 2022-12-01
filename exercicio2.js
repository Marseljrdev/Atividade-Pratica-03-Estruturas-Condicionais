// 2. Escreva um algoritmo que solicite 2 números e uma operação
// matemática. O algoritmo deve realizar o cálculo com os 2 números
// digitados conforme a operação informada.

var numero1 = prompt("Digite o primeiro numero: ");
var numero2 = prompt("Digite o segundo numero: ");
var operacao = prompt("Qual operacao deseja realizar? + - * / ");

var resultadoOperacao = realizaOperacao(numero1, numero2, operacao);

document.write("O resultado da sua operacao é: " + resultadoOperacao);

function realizaOperacao(numero1, numero2, op){

    var resultado = 0;

    resultado = eval(numero1 + op + numero2);

    return resultado;

}