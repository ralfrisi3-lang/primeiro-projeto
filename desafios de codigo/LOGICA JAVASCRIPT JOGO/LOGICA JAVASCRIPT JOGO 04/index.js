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