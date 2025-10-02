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
        else  (valorDoSalario > 2500) {
            valorImposto = 0.15f * valorDoSalario;
        }

        //Calcula e imprime a saida com 2 casas decimais:
        float saida = valorDoSalario - valorImposto + valorDoBeneficio;
        System.out.println(String.format("%.2f\n", saida));
    }

}