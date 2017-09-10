class FuncionariosView {

    constructor(element) {
        this._viewElement = element;
    }

    _template(model) {
        
        return `
            ${model.map((f) => {
                return `
                    <tr>
                        <td>${f.nome}</td>
                        <td>${f.endereco}</td>
                        <td>${f.salario}</td>
                    </tr>
                `
                }).join('')
            }
        `;
    }

    update(model) {
        this._viewElement.innerHTML = this._template(model);
    }
    
}