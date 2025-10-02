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



