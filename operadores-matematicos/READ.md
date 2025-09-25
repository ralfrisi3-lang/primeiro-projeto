//SOMA

console.log("Operação de adição " + idade)

//idade = 30 + 6
//console.log(idade)

idade = 30 - 6
console.log("Operação de subtração " + idade)


//MULTIPLICAÇÂO
//EX;1
let precoProduto = 10
let valorComImposto = precoProduto * 2
console.log(valorComImposto)

//EX:2
let precoProduto = 99.99
let valorComImposto = precoProduto * 2
console.log(valorComImposto)

//EX3
let multiplicador = 8;
let multiplicando = 12;
let produto = multiplicador * multiplicando;
console.log("Resultado da multiplicação é: " + produto);


//Ao reutilizar uma variavel não é necessario usar a instrução let
multiplicador = 2;
produto = multiplicador * multiplicando;
console.log("Resultado da multiplicação é: " + produto);


//DIVISAO

let notaDoMercado = 250
let pessoasParaDividir = 2
console.log("O valor é de: " + notaDoMercado / pessoasParaDividir  + " para cada um!")

ex:2

//usa % para mostrar a sobra de uma divisão
let calculo = 20 % 3
console.log("Operação de modulo " + calculo )


//INCREMENTO DECREMENTO

let contador = 5

//'++' incremento
contador++
contador++

//'--' decremento
contador--
contador--
console.log(contador)


let preco = 100
preco += 50 //preço + 50
console.log(preco)

preco -= 50 //preço - 50
console.log(preco)


//ESCOPO
//Escopo de operações aritimeticas utilizando parenteses()
let resultado = 2 * ((5 + 5) - 3)

console.log(resultado)