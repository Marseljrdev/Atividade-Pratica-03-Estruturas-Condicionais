// 9. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;

 
var altura = 0;
var alturas = [];

while(alturas.length <= 2) {
    
    altura = parseFloat(prompt('Digite a sua altura: '));

    if(!alturas.includes(altura)){
        alturas.push(altura);
    }

};

var altMaior = alturas[0];
var altMenor = alturas[0];

for(let i = 0; i < alturas.length; i++){

    if(alturas[i] > altMaior) {
        altMaior = alturas[i];
    }
    if(alturas[i] < altMenor) {
        altMenor = alturas[i];
    }

}

document.write("A maior altura da lista é: " + altMaior, '<br>');
document.write("A menor altura da lista é: " + altMenor, '<br>');


// console.log(alturas[0]);













/* var firstAltura = parseFloat(prompt("Digite a primeira altura: "));
var nextAltura = '';

for(let i = 2; i <= 5; i++) {
    
    nextAltura = parseFloat(prompt("Digite a " +i+ "altura: "));

}

if(nextAltura > firstAltura) {
        document.write("A maior altura do grupo é: " + nextAltura, '<br>');
    // firstAltura = nextAltura;
}else{
    
    document.write("A menor altura é: " + firstAltura);
}
/* if( firstAltura < nextAltura) {
    // firstAltura;
    document.write("A menor altura é: " + firstAltura);
} */
