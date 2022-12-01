// Escreva um algoritmo que faça a tabuada de um número e
// apresente o resultado de acordo com o modelo a seguir, sabendo
// que o multiplicando deverá ser fornecido pelo usuário (n) e a
// quantidade de iterações também (i).
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6

var multiplicando = parseInt(prompt("Digite o valor do multiplicando: "));
var interacoes = parseInt(prompt("Digite a quantidade de interações: "));
var i = 1;


for(i; i <= interacoes; i++) {
    let result = i * multiplicando;

    document.write(i + " * " + multiplicando + " = " + result, '<br> <br>');
}