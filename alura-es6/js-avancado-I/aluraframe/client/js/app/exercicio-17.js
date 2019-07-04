// Exercicio 17
//
let numeros = [3,2,11,20,8,7];
let numerosClone = numeros.map((item) => {
        if(item % 2 != 0) {
            return item * 2;
        }

        return item;
    }
);

// Otimizado - Usando operador ternario
// let numerosClone = numeros.map((item) => item % 2 ? item * 2 : item );

// Otimizado - Usando calculo com modulo
// let novosNumeros = numeros.map((item)=> (item%2 +1 ) * item);

console.log("EXERCICIO 17");
console.log("numerosClone array:" + numerosClone);

// Outra solucao para o Ex 17, sem que seja usando o .map
let numerosProfessor = [3,2,11,20,8,7];
let novosNumeros = [];

numerosProfessor.forEach(item => {

    if(item % 2  != 0) {
        novosNumeros.push(item * 2);
    } else {
        novosNumeros.push(item);
    }
});
console.log(novosNumeros);