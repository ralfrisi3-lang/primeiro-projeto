const nome = gets(); //Lê o nome do item


//Para converter os valores inseridos na entrada utilizamos a função Javascript parseInt() que converte a parte inicial da string em um numero inteiro
const nome = gets();
const quantidade = parseInt(gets());

//Criamos um array de objetos para representar o inventario do jogador
let inventario = [
    { nome: 'Espada', quantidade: 1 }, //
    { nome: 'Escudo', quantidade: 1 },
    { nome: 'Poção de cura', quantidade: 6 },
    { nome: 'Arco e Flecha', quantidade: 4 },
    { nome: 'pergaminho', quantidade: 3 }
];

//Utilizamos o metodo Javascript find() para encontrar o item no inventario/array que satisfaça a condição dada na função callback
let item = inventario.find(item => item.nome === nome); //Procura o item no inventario

//TODO implemente a condição necessária para a exibição de cada mensagem
// verifica se o item existe e se há quantidade suficiente 
if (item && item.quantidade >= quantidade) {
     print("Disponível");
     } else {
         print("Indisponível"); 
}
