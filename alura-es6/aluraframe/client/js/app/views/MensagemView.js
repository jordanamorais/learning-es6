class MensagemView extends View {

    // Removendo para usar apenas a da View.js
    // constructor(elemento) {

    //     this._element = elemento;
    // }

    // Se receber um parametro no construtor, é preciso passar esse dado pra classe pai
    constructor(elemento) {
        
        // Passa pro construtor do pai;
        super(elemento);
    }

    // Sobrescreve o método da classe Pai
    template(model) {

        // Se vier vazio/falso, não renderiza nada
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '';
    }

    // Removendo para usar apenas a da View.js
    // update(model) {

    //     this._element.innerHTML = this._template(model);
    // }
}