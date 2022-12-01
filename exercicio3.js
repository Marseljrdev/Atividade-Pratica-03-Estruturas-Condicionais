// 3. Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
// a conta do usuário deve ser criada já com um saldo positivo. O
// usuário precisa informar a quantidade de dinheiro que deseja
// retirar, esse valor deve ser um número positivo, múltiplo de 5 e
// menor do que o saldo. Cada saque eletrônico cobra uma taxa de
// R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
// certo com o saque, e se o usuário informar um valor maior que o
// saldo deve ser informado ao usuário que o mesmo não tem dinheiro
// suficiente em conta para realizar o saque.
// OBS: Na verificação se o valor do saque é maior que o saldo deve
// ser considerado e também contabilizado o valor da taxa a ser
// cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
// da taxa do saque não pode ser maior que o saldo disponível.

var saldo = 1000;
var valorSaque = parseFloat(prompt("Digite o valor do saque: "));
var taxa = 4.50;
var saqueTotal = valorSaque + taxa;

if (saldo < saqueTotal) {
    alert("voce nao possui saldo suficiente");
}else if(valorSaque % 5 !== 0){
    alert("Notas disponiveis : \n R$ 5 \n R$ 10 \n R$ 20 \n R$ 50 \n R$ 100");
}else{
    saldo -= saqueTotal;
    alert("voce ficou com um saldo de " + saldo);
}