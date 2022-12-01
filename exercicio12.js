// 12. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.



var numeroDez = [];
var soma = 0;
var media = 0;
var valorPositivo = 0;
var valorNegativo = 0;


do{
    numeroDez.push(parseInt(prompt("Digite um numero: ")));
}while(numeroDez.length <= 3);



for(let i = 0; i < numeroDez.length; i++){

    soma += numeroDez[i];

    media = soma / numeroDez.length;


    if(numeroDez[i] > 0){
        valorPositivo += 1;
    }else if(numeroDez[i] < 0){
        valorNegativo += 1;
    }
    

} 

var percentPositivo = operacao1(valorPositivo, numeroDez);
var percentNegativo = operacao2(valorNegativo, numeroDez);

function operacao1(valorPositivo, numeroDez) {

    let result = 0;

    result = (valorPositivo / numeroDez.length) * 100;

    return parseInt(result);

}

function operacao2(valorNegativo, numeroDez) {

    let result = 0;

    result = (valorNegativo / numeroDez.length) * 100;

    return parseInt(result);

}


console.log('A soma total é de: ' + soma);
console.log('sua media é: ' + media);  
console.log('A quantidade de numeros positivos sao: ' +  valorPositivo);
console.log('A quantidade de numeros negativo sao: ' +  valorNegativo);
console.log('O percentual do numero positivo é de: ' + percentPositivo, '%');
console.log('O percentual do numero positivo é de: ' + percentNegativo, '%');



