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
