//SWITCH

//Estrutura de decisão que pode substituir o if/else quando temos muitas condições a serem verificadas
//É mais simples e mais fácil de ler
//Switch/Case/Break/Default

let fruta = 'banana';

switch(fruta){
    case 'laranja':
    console.log('Suco de laranja');

    case 'banana':
    console.log('Vitamina de banana');

    case 'mamão':
    console.log('Suco de mamão');
    
}


2 - EX:

//Switch    

//Estrutura de decisão que pode substituir o if/else quando temos muitas condições a serem verificadas
//É mais simples e mais fácil de ler
//Switch/Case/Break/Default

let fruta = 'pera';

switch(fruta){
    case 'laranja': //Se fruta for igual a laranja
    console.log('Suco de laranja');
    break; //Se não colocar o break, ele vai executar todos os cases abaixo do case que bateu

    case 'banana':
    console.log('Vitamina de banana');
    break;

       case 'mamão':
    console.log('Suco de mamão');
    break

    default:
    console.log('Suco indisponivel');
    
}

3 - ex:

let fruta = 'pera';

switch(fruta){
    case 'laranja': //Se fruta for igual a laranja
    case 'morango': //Se fruta for igual a morango
    console.log('Suco de laranja');
    break; //Se não colocar o break, ele vai executar todos os cases abaixo do case que bateu

    case 'banana':
    console.log('Vitamina de banana');
    break;

       case 'mamão':
    console.log('Suco de mamão');
    break

    default:
    console.log('Suco indisponivel');


    4 - EX:

    