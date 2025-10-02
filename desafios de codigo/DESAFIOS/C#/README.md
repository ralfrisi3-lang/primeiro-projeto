//DESAFIO / C#

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




//DESAFIO / C#

//Para ler e escrever dados em C#, utilizamos os seguintes metodos de classe console:
//Console.ReadLine() -> para ler uma linha de dados do console(entrada/ imput do usuario)
//Console.WriteLine() -> para imprimie/escrever uma linha de dados no console (saida/output do programa)

using System;

public class DESAFIO
{
    public static void Main()
    {
    //le os valores de entrada:
    float valorDoSalario = float.Parse(Console.ReadLine());
    float valorDoBeneficio = float.Parse(Console.ReadLine());

    float valorDoImposto = 0.0f;    
    if (valorDoSalario >= 0 && valorDoSalario<= 1100)
    {

        //Atribui a aliquota de 5% sobre o salario
        valorDoImposto = 0.05f * valorDoSalario;

    }

    //Criar as demais condições para as aliquotas de 10,00% e 15,00%
    else if (valorDoSalario > 1100 && valorDoSalario <= 2500)
    {
        //Atribui a aliquota de 10% sobre o salario
        valorDoImposto = 0.10f * valorDoSalario;
    }
    else  (valorDoSalario > 2500)
    {
        //Atribui a aliquota de 15% sobre o salario
        valorDoImposto = 0.15f * valorDoSalario;
    }

    //Calcula e imprime a saida com 2 casas decimais:
    float salarioLiquido = valorDoSalario - valorDoImposto + valorDoBeneficio;
    Console.WriteLine(salarioLiquido.ToString("0.00"));
    }   
}

