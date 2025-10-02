#PYTHON

#Para ler e escrever dados em python, utilizamos as segiuintes funcoes:
#input() -> ler dados
#print() -> escrever dados

#Função util para o calculo do imposto(baseado nas aliquotas )
def calcula_imposto(salario):
    aliquota = 0,00
    if (salario >= 0 and salario <= 1100):
        aliquota = 0.05
        
    # Criar as demais configurações para as aliquotas de 10,00% e 15,00%
    elif (salario > 1100 and salario <= 2500):
        aliquota = 0.10 

    else (salario > 2500):
        aliquota = 0.15 

            return aliquota * salario

#Le os valores de entrada:
salario = float(input())
beneficios = float(input())

#Calcula o imposto usando a função calcula_imposto
imposto = calcula_imposto(salario)

#Calcula e imprime a saida com 2 casas decimais
salario_liquido = salario - imposto + beneficios
print(f"{salario_liquido:.2f}")




