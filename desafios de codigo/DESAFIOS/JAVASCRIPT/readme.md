//DESAFIO / JAVASCRIPT

faça um programa que calcule e imprima o salario a ser tranferido para um funcionario.

Para realizar os calculos receba o valor bruto do salario e o adicional dos beneficios.
O salario a ser transferido deve ser calculado da seguinte forma:

(valor bruto - percentual de imposto mediante ao salario) + adicional dos beneficios

Para calcular o percentual de imposto utilizar os dados abaixo:

De R$0.00 a R$1.100,00 = 5,00%
De R$ 1.100,01 a R$2,500,00 = 10,00%
Maior que R$2,500,00 = 15,00%

ENTRADA

A entrada consiste em varios arquivos de teste, que conterá o valor bruto do salario e adicional de beneficios. Conforme mostardo no exmplo de entrada a seguir.


SAIDA

Para cada arquivo de entrada, havera um arquivo de saida. E como mencionado no desafio, sera gerado um numero que sera a diferença entre o valor bruto e o percentual de imposto de acordo com a faixa salarial somando com o valor adicional dos beneficios. Use o exemplo abaixo para entender o que está sendo pedido:

ENTRADA

salario = 2000
beneficio = 250

SAIDA 2050,00




//DESAFIO / JAVASCRIPT

//As funçoes GETS E PRINT foram implementadas  e não sao nativas do Javascript
// - gets : funcao que retorna uma entrada de dados como string
// - print : imprime um texto de saida (output), pulando uma linha

//Le os valores de entrada:
const ValorDoSalario = parseFloat(gets());
const valorDosBeneficios = parseFloat(gets());

//Calcula o imposto atraves da função "calculaImposto"
const valorDoImposto = calculaImposto(ValorDoSalario);
//Calcula e imprime a saida (output com duas casas decimais)

const saida = ValorDoSalario - valorDoImposto + valorDosBeneficios
print(saida.toFixed(2));

//Funcao que calcula o imposto de acordo com as aliquotas
function calculaImposto(salario) {
    let aliquota = 0;
    if (salario >= 0 && salario <= 1100) {
        aliquota = 0.05;
    }
    //Criar as demais condoções para as aliquotas de 10,00% e 15,00%
    else if (salario > 1100 && salario <= 2500) {  
        aliquota = 0.10;
    }   
    else  (salario > 2500) {
        aliquota = 0.15;
    }       
}   
