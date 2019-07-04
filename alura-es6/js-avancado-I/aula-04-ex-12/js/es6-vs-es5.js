// Em ES6
class Pessoa {

    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobreNome = sobrenome;
    }

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    static metodoStaticoQualquer() {
        console.log('Método estático chamado');
    }

}

// Como era antes, em ES5
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// método de instância
Pessoa.prototype.obterNomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

// declarando equivalente a método estático

Pessoa.metodoStaticoQualquer = function() {

    console.log('Método estático chamado');

};