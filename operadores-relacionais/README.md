//OPERADORES RELACIONAIS

1-Atribuição - Comparação - Valor e Conteudo
// = é atribuição
// == é comparação (valor)
// === é comparação (valor e tipo) compara formato e conteudo
let numero = "1"
console.log(numero === 1)

2 - EX:
let marca = "Playstation"
//console.log(marca == "Playstation") //true
console.log(marca == "Playstation") //true
console.log(marca === "Playstation") //true
console.log(marca != "Playstation") //false
console.log(marca !== "Playstation") //false

3 - EX
//guardar o valor de uma comparação em uma variável de resultado true/false
let marca = "Playstation"
let resultado = marca == "Xbox"  //false
console.log(resultado)  


4 - EX
//guardar o valor de uma comparação em uma variável de resultado true/false
let cpfBloqueado = "123.444.222-66"  //variavel que armazena o cpf bloqueado
let cpfCliente = "122.444.222-66" //variavel que armazena o cpf do cliente

//comparação de igualdade (==) - verifica se os valores são iguais
//comparação de identidade (===) - verifica se os valores e os tipos são iguais
//comparação de diferença (!=) - verifica se os valores são diferentes
//comparação de diferença estrita (!==) - verifica se os valores e os tipos são diferentes

let cpfEhBloqueado = cpfCliente == cpfBloqueado //variavel que armazena acomparação de igualdade entre as variaveis cpfCliente e cpfBloqueado

//estrutura condicional simples
//se o cpf do cliente for igual ao cpf bloqueado, então exibir a mensagem de pendencia
if(cpfEhBloqueado){cpfCliente === cpfBloqueado
    console.log("O CPF informado possui pendencia !!!")
} else {
    console.log("O CPF informado não possui pendencia !!!")
}



5 - EX

let idadeMinima = 50;
let idadeCliente = 50;
let IdadePermitida = idadeCliente >= idadeMinima; // >= maior ou igual
console.log(IdadePermitida); // false