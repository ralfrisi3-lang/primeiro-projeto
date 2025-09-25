// 1. Criar variáveis para o nome e a experiência do personagem 
let nomePersonagem = "Mago"; //alternar entre Mago, Guerreiro, Ladra e Anão para testar

let experienciaPersonagem = 9888; // Pode ser qualquer valor entre 0 e 10000 para testar

// 2. Utilizar uma estrutura de decisão para apresentar mensagens
if (experienciaPersonagem < 1000) {
  console.log(`${nomePersonagem}: Esta no Nível Ferro`); // Mensagem para < 1000 XP
} else if (experienciaPersonagem >= 1001 && experienciaPersonagem <= 2000) {
  console.log(`${nomePersonagem}: Esta no Nível Ferro`); // Mensagem para 1001-2000 XP
} else if (experienciaPersonagem >= 2001 && experienciaPersonagem <= 3000) {
  console.log(`${nomePersonagem}: Esta no Nível Bronze`); // Mensagem para 2001-3000 XP
} else if (experienciaPersonagem >= 3001 && experienciaPersonagem <= 4000) {
  console.log(`${nomePersonagem}: Esta no Nível Prata`); // Mensagem para 3001-4000 XP
} else if (experienciaPersonagem >= 4001 && experienciaPersonagem <= 5000) {
  console.log(`${nomePersonagem}: Esta no Nível Ouro `); // Mensagem para XP acima de 5000
} else if (experienciaPersonagem >= 5001 && experienciaPersonagem <= 6000) {
  console.log(`${nomePersonagem}: Esta no Nível Platina`); // Mensagem para XP acima de 5000
} else if (experienciaPersonagem >= 6001 && experienciaPersonagem <= 7000) {
  console.log(`${nomePersonagem}: Esta no Nível Ascendente`); //Mensagem para XP acima de 6000 
} else if (experienciaPersonagem >= 7001 && experienciaPersonagem <= 8000) {
  console.log(`${nomePersonagem}: Esta no Nível Imortal`); //Mensagem para XP acima de 7000  
} else if (experienciaPersonagem >= 8001 && experienciaPersonagem <= 10000) {
  console.log(`${nomePersonagem}: Esta no Nível Radiante das Galaxias`); //Mensagem para XP acima de 8001  
} else if (experienciaPersonagem >= 10001) {
  console.log(`${nomePersonagem}: Atingiu a pontuação maxima!!!`)  
}














