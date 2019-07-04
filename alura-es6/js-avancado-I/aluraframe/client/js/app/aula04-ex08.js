
// Classe com os metodos static, sem precisar chamar a instancia com o new
// ---
// class Codigo {

//     constructor() {
//     }

//     static validate(codigo) {

//         let regex = /\D{3}-\D{2}-\d{2}/; 

//         if(regex.test(codigo)) {
//             alert('Código válido!');
//         } else {
//             alert('Código inválido');
//         }
//     }
// }

// Outra Solução (Professor), deixando a Classe instanciavel mesmo
// ---
class Codigo {

    constructor(codigo) {

        if(!this._validate(codigo)) {
            throw new Error(`O código ${codigo} inserido não é válido`);
        }
        this._codigo = codigo;
    }

    _validate(codigo) {

        return /\D{3}-\D{2}-\d{2}/.test(codigo);
    }

    get showCode() {

        return this._codigo;
    }
}