// 11. Desenvolva um algoritmo que mostre uma contagem regressiva de
// 30 até 1, marcando os números que forem primos, exatamente
// como mostrado abaixo:
// 30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...



function numPrimo(num) {
        for(let i = 2; i <num; i++){
            if(num % i === 0) {
                return false
            }
        }

        return num > 1;
    }

const numTop = parseInt(prompt('Digite um número'))
for( let i=numTop; i>0; i--){
    if (numPrimo(i)){
        document.write(`[${i}]` + '<br>');
    }
    else{
        document.write(i + '<br />')
}


}

