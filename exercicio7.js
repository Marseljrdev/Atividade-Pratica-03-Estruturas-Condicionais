// 7. Escreva um programa que pergunte a velocidade de um carro. Caso
// ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
// multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
// km acima da velocidade permitida.


const velocidade = 80;
var velocidadeCarro = parseInt(prompt("O carro esta em qual velocidade? "));

if(velocidadeCarro > 80){

    alert('Voce ultrapassou o limite de 80km e foi multado');

    let operacao = 0;
    operacao = (velocidadeCarro - velocidade) * 5;
    document.write("Sua multa esta no valor de: " + operacao);

}else{
    console.log('Velocidade permitida');
}








