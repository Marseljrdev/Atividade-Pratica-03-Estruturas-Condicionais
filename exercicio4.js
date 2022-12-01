// 4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
// e verifique quais números são múltiplos de 3 e quais são múltiplos
// de 5.



for(numero = 1; numero <= 250; numero++) {
    // console.log(numero);
    
    if(numero % 3 === 0 ){
        document.write('Os multiplos de 3 sao: ' + numero, '<br>');
    }

}

for(contador = 1; contador <= 250; contador++) {
    // console.log(numero);
    
    if(contador % 5 === 0 ){
        document.write('Os multiplos de 5 sao: ' + contador, '<br>');
    }
}

