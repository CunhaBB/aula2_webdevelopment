//TIPOS PRIMITIVOS
//BOOLEAN
var boolean = false;
console.log(`A variável ${boolean} team o tipo ${typeof(boolean)}`);

var number = 1;
console.log(`A variável ${number} team o tipo ${typeof(number)}`);

// usando variavel global
var nome = 'Matheus';
function nomeDaFuncao() { //não pode começar com maiuscula
    var sobrenome = 'Cunha'
    console.log(sobrenome);
}

console.log(nome);
nomeDaFuncao();

// comparação
var comparacao = "0" == 0;
console.log(comparacao);

var comparacaoIdentica = "0" === 0;
console.log(comparacaoIdentica);

//operadores aritiméticos

var multiplicacao = 5 * 10;
console.log(multiplicacao);

var divisao = 50 / 10; 
console.log(divisao);

var multiplicacao = "multiplicação"; //atualizado a variavel

const prof = 'Lucas Sousa'; // não pode ser atualizada a constante

// operadores relacionais
// >, <, ==, !=, <=, >=
// maior ou igual
var maiorOuIgual = 5 >= 6;
console.log(maiorOuIgual)

var diferente = 4 != 8;
console.log(diferente);

// operadores logicos
// && (e), || (ou), ! (not)
var e = true && true;
console.log(e);

var ou = true || false;
console.log(ou);

var not = !true;
console.log(not);