// FUNÇÂO

//FUNCAO não iniciar com numeros, maiusculas ou espaços
//Função é um liquidificador de código
//Função é um bloco de código que pode ser executado e reutilizado quando for necessário
//Função pode receber parametros e retornar valores
//Função pode ser declarada de várias formas
//preferencialmente utilzar verbos no nomes de declaração

torrar(); //Posso chamar a função antes dela ser declarada
injetarPao();
//
//Declaração de função (Function hoisting)
function torrar() {
  console.log("Torrando o pão");
}

function injetarPao(tipoPao) {
  console.log("preparando para injetar pao "+ tipoPao);
  console.log("finalizado");
}


2 - EX:

//FUNCAO


torrar(); //Posso chamar a função antes dela ser declarada

//
//Declaração de função (Function hoisting)
function torrar() {
  console.log("Torrando o pão")
  injetarPao() //chamando a função dentro de outra função
}

function injetarPao() {
  console.log("preparando para injetar pao ")
  console.log("finalizado")
}



3 - EX:

main(); // Chama a função principal


function main() {   // Função principal
getData() // Pega os dados do usuário
checkValues() // Verifica se os dados estão corretos
sendToDatabase() // Envia os dados para o banco de dados
  }

function getData() {
  // Pega os dados do usuário
  console.log("Pega os dados do formulário")        
  }

function checkValues() {
  // Verifica se os dados estão corretos
  console.log("Valida os dados")        
  }

  function sendToDatabase() {
    // Envia os dados para o banco de dados
    console.log("Envia os dados para o banco de dados")        
    }

    
    4 - EX:

    function enviarDados() {
    let nomeDoBanco = "banco-de-dados";
    console.log("salvando dados em: " + nomeDoBanco) // A variável nomeDoBanco é acessível aqui

    if  ( 3 === 3) {
    console.log("Senha Validada" ) // A variável nomeDoBanco é acessível aqui
    }
}
