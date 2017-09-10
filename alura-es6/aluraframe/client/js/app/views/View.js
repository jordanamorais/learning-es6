// Herannça em JS com extends
class View {

    constructor(elemento) {

        this._element = elemento;
    } 

    // Para dar Feedback pro programador, lançando o erro caso não haja o método na view Filha
    template() {

        throw new Erro('O método _template() deve ser implementado');
    }

    update(model) {

        this._element.innerHTML = this.template(model);
    } 
}