// 5. Faça um algoritmo que leia a idade e peso de um atleta e imprima
// a sua categoria, de acordo com a seguinte tabela:

// Idade Peso Categoria
// Até 12 anos - Infantil
// 13 a 16 anos Até 40kg Juvenil leve
// Acima de 40kg Juvenil pesado
// 17 a 24 anos Até 45kg Sênior leve
// Acima de 45kg até 60kg Sênior médio
// Acima de 60kg Sênior pesado
// Acima de 24 anos - Veterano

const idade = parseInt(prompt('Digite sua idade: '));
const peso = parseFloat(prompt('Digite o seu peso: '));

var resultCategoria = calculo(idade, peso);

function calculo(idade, peso) {

    if(idade <= 12 ) {
        document.write("Categoria infantil");
    }else if((idade > 13 && idade <= 16) && peso <= 40){
        document.write("Categoria Juvenil leve");
    }else if((idade > 13 && idade <= 16) && peso > 40){
        document.write("Categoria juvenil pesado");
    }else if((idade > 17 && idade <= 24) && peso <= 45){
        document.write("Categoria senior leve");
    }else if((idade > 17 && idade <= 24) && (peso > 45 && peso <= 60)){
        document.write("Categoria senior medio");
    }else if((idade > 17 && idade <= 24) && peso > 60){
        document.write("Categoria senior pesado");
    }else if(idade > 24 && peso > 60){
        document.write("Categoria veterano");
    }
  
}