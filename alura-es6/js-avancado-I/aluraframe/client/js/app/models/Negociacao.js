// Regras de Negocio
// 1 - Depois de criada uma negociacao, ela nao pode ser alterada. (seja somente leitura)
//     A convenção para o programador para isso é utilizar _ na frente das caracteristicas do construtor.
//     Apenas a classe pode utilziar estas propriedades. Ninguem de fora poderá alterá-las e acessá-las.
//     São atributos privados.
//     Para isso se utilizam métodos acessadores. (Get)

// pascal case (convecao com a primeira letra maiuscula para Classes)
class Negociacao {

    // caracteristicas da classe sao definidas no construtor
    // Toda classe que tem um construtor precisa ser chamada depois, fora, com o new.
    // o construtor recebe parametros como numa funcao

    // Só a propria classe deve poder acessar estes valores
    constructor(data, quantidade, valor) {

        // this = instancia que está executando a operacao naquele momento.
        //this.data = new Date(); // instancia. Herdará Date
        //this._data = data; // inseguro, o valor da data pode ser alterado via propriedade
        this._data = new Date(data.getTime()); // garanto que nao terei como alterar o objeto externamente
        this._quantidade = quantidade; // começa com este valor
        this._valor = valor;

        // Congelar para garantir que o valor nao será mudado fora da classe;
        // A instancia deve ser imutável.
        Object.freeze(this); // congela a instância do objeto. todo objeto que for new Negociacao(), ex.: n1, no index.html.
        // OBS! - Object.freeze é "raso". Para quantidade e valor, ele congela. Mas o objeto data que é de uma API
        //        diferente, se acessar algum método da API o valor deixa de ser imutável. Ex. n1.data.setDate(11);
        // Ele nao faz um deep freeze. Um objeto que possui outras propriedades, acessar uma dessas propriedades, o dado
        // passa a ser mutável de novo.

    }

    // comportamentos da Classe
    // ---
    // Métodos sao especies de funçao. Fora de uma classe é funcao. Dentro de uma classe é metodo

    // usando o get voce pode acessar este metodo como se fosse uma propriedade.
    get volume() { // getVolume() convencao antiga
        return this._quantidade * this._valor;
    }

    // Métodos acessadores para que externamente possa se acessar estes valores do construtor
    // Encapsulamento
    get data() {
        //return this._data; // chamada antiga, mas que o objeto acessado de fora poderia ser mutavel
        return new Date(this._data.getTime()); // maneira correta de garantir o retorno sendo imutável (Prog. defensiva)
        // retorna uma cópia do objeto
    }

    // Um método getter só retorna. Nao aceita valores.
    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

}