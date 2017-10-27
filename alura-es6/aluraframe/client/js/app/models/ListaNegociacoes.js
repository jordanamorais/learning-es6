class ListaNegociacoes {

    // o constructor é chamando quando criamos uma instância de uma classe com o operador new
    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
    }

    get negociacoes() {

        // Nao garante de alterar por fora o array
        // return this._negociacoes;

        // Programaçao Defensiva
        // retorna uma copia  de um novo objeto array na memoria, com os dados da negociacao
        // e garante que nao pode ser alterado por fora da Class
        // O concat tambem pode concatenar dois arrays num so.
        return [].concat(this._negociacoes);
    }

    esvazia() {
        
        this._negociacoes = [];
    }
}