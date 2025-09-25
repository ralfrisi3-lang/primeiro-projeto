// CONDICIONAIS


1 - EX

//CONDICIONAIS

//Estrutura de decisão
//if (se) - else (senão)
let ehligado = true; //true ou false


if (ehligado) {
    console.log("Executou Comando")
}



2 - EX

//Estrutura de decisão
//if (se) - else (senão)
let possuiOvos  = false;
let itensComprados = '';

if (possuiOvos) {
    itensComprados = 'Leite';  
}

console.log(itensComprados);


3 - EX

//Estrutura de decisão
//if (se) - else (senão)
let possuiOvos  = true;
let itensComprados = '';

if (possuiOvos) {
    itensComprados = 'Leite';  
}

console.log(itensComprados);



4 - EX

//Estrutura de decisão
//if (se) - else (senão)
let possuiOvos  = false;
let itensComprados = '';

if (possuiOvos) {
    itensComprados = 'Leite';  
}
else {
    console.log('passou na sessão de congelados');
    itensComprados = "lasanha congelada"
}

console.log(itensComprados);


5 - EX

//Estrutura de decisão
//if, else if, else
let nivelDeFome = 8 
if(nivelDeFome === 1){
    console.log("Estou com muita fome")

}else if(nivelDeFome === 2){
    console.log("Estou com fome")

}else{
    console.log("Não estou com fome")
}  

