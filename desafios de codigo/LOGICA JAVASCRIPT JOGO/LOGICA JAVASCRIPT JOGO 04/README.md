Descrição
Você está desenvolvendo um sistema para um jogo de combate onde os jogadores acumulam dinheiro ao longo dos rounds e no início de cada round devem comprar um item ou economizar para rounds futuros. No início da partida, o jogador possui um saldo inicial. Durante o jogo, o saldo do jogador é ajustado de acordo com o resultado de cada round: se o jogador ganhar, o saldo aumenta em 15%, se o jogador perder, o saldo aumenta em apenas 5%, e se for um round bônus, o saldo aumenta em 20%. Sua tarefa é criar um método que determine se um jogador deve comprar um item ou economizar com base no saldo atual.

Entrada
A entrada será composta por três valores: o primeiro valor será um número inteiro representando o saldo inicial do jogador; o segundo valor será "ganhou" se o jogador ganhou o último round, "perdeu" se o jogador perdeu o último round ou “bônus” se for um round bônus; o terceiro valor será um número inteiro representando o custo do item que o jogador deseja comprar neste round.

Saída
Imprima a mensagem "Comprar" se o jogador tiver saldo suficiente para comprar o item, caso contrário deve retornar "Economizar".

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída
100 
ganhou
115	Comprar
88
bônus
100	Comprar
98 
perdeu
120	Economizar






// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print" : imprime um texto de saída (output), pulando linha.

// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
// Lê os inputs
const saldoInicial = parseInt(gets().trim());
const resultadoUltimoRound = gets().trim().toLowerCase(); // garante que funcione mesmo com maiúsculas/minúsculas
const custoItem = parseInt(gets().trim());

// Inicializa saldo
let novoSaldo = saldoInicial;

// Ajusta o saldo de acordo com o resultado do round
if (resultadoUltimoRound === "ganhou") {
    novoSaldo += saldoInicial * 0.15;
} else if (resultadoUltimoRound === "perdeu") {
    novoSaldo += saldoInicial * 0.05;
} else { // "bônus" ou qualquer outro caso
    novoSaldo += saldoInicial * 0.20;
}

// Arredonda para inteiro
novoSaldo = Math.round(novoSaldo);

// Decide se compra ou economiza
if (novoSaldo >= custoItem) {
    print("Comprar");
} else {
    print("Economizar");
}