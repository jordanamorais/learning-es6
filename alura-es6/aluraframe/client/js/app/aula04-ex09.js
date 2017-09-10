//let lista = []; // Nem precisa

let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];

// Usando o concat() pra concatenar as listas.
// Nem precisa criar a variavel lista vazia, na memoria
// A função concat aceita receber um número infinito de parâmetro
exibeNoConsole([].concat(listaDeNomes1, listaDeNomes2, 'Jordana'));

function exibeNoConsole(lista) {
    
    lista.forEach(item => console.log(item));
}