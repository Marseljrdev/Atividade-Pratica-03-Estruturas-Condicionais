// 6. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.

var pedro = parseFloat(1.50);
var lucas = parseFloat(1.10);
var i = 0;
var maisUm = 1;


while(pedro >= lucas){


    lucas += parseFloat(0.03);
    pedro += parseFloat(0.02);
    i++;
    
}
console.log("O tempo necessario é de: " + i + " anos para ficar do mesmo tamanho");
console.log("O tempo necessario para passar o tamanho é de:", i + parseInt(maisUm) + " anos");
