//DESAFIO / JAVA

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




//para ler e escrever dados em java
//- new Scanner(System.in) -> ler dados do teclado, cria um leitor de entradas, com metodos uteis com prefixo "next"
//- System.out.println() -> escrever dados na tela, imprime um texto de saida (output) com quebra de linha

import java.util.Scanner;

public class Desafio {

    public static void main(String[] args) {
        //le os valores de entrada
        Scanner leitoDeEntradas = new Scanner(System.in); //cria um leitor de entradas
        float valorDoSalario = leitoDeEntradas.nextFloat(); //lê um valor float / float variavel numerica de inteiros simples com decimais
        float valorDoBeneficio = leitoDeEntradas.nextFloat();

        float valorImposto =0;
        if (valorDoSalario >= 0 && valorDoSalario <= 1100) {
            valorImposto = 0.05f * valorDoSalario;
       
        }
        //Criar as demais condições para as aliquotas de 10,00% e 15,00%

        else if (valorDoSalario >= 1100.01 && valorDoSalario <= 2500) {
            valorImposto = 0.10f * valorDoSalario;
        }
        else if (valorDoSalario > 2500) {
            valorImposto = 0.15f * valorDoSalario;
        }

        //Calcula e imprime a saida com 2 casas decimais:
        float saida = valorDoSalario - valorImposto + valorDoBeneficio;
        System.out.println(String.format("%.2f\n", saida));
    }

}