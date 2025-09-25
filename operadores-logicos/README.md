//OPERADORES LOGICOS


1 - EX

// AND (&&)
let idade = 17 // idade do usuario
let verificacaoDeVisto = true // se o usuario tem visto ou nao

// para ser maior de idade e ter visto, as duas condicoes precisam ser verdadeiras
// se uma das condicoes for falsa, o resultado sera falso
// se as duas condicoes forem verdadeiras, o resultado sera verdadeiro  
let resultado = (idade >= 18) && (verificacaoDeVisto === true) 

// resultado sera false, pois a primeira condicao e falsa
console.log(resultado)


2 - EX

// AND (&&) - 100 moedas coletadas e um item estrela
let moedasColetadas = 66
let item = "estrela"
let resultado = (moedasColetadas >= 100) && (item === "estrela")
console.log(resultado)


3 - EX

// OR (||) Personagem so pode sair sem chuva ou se tiver guarda-chuva
let tempo = "chuva"
let item = "guarda-chuva"
let podeSair = (tempo !== "chuva" || item === "guarda-chuva")
console.log("Nosso personagem pode sair? " + podeSair)



4 - EX

// NOT (!) - Nega uma afirmação
let tempo = "chuva" 
let resultado = tempo !== "chuva" // !== é diferente de "chuva"
console.log(resultado) // false


5 - EX

// NOT (!) - Nega uma afirmação
let tempo = "chuva" 
let horario = 8
let resultado = (tempo !== "chuva") && (horario >6) // !== é diferente de "chuva"
console.log(resultado) // false