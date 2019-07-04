class NegociacoesView extends View {

    // A view deverá ter a lista atualizada com os dados do Modelo.

    // constructor(element) {

    //     this._viewElement = element;
    // }

    constructor(elemento) {

        // Passa pro construtor do pai;
        super(elemento);
    }

    // Retorna a template que será usada pra tabela.
    // Método que não será chamado externamente, mas apenas dentro da própria classe.
    template(model) {

        // o Map vai devolver um novo array, mas tem que retornar uma string pra template
        // logo, tem que retornar outra template string. Varre a lista de negociacoes, cria um novo array
        // e retorna uma string interpolada e nao o array

        // retorna uma template string.
        // Usa-se crase ` para template strings
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
            
                <tbody>
                    <!-- Quando há uma unica linha poderia retirar as chaves e o nome return -->
                    ${model.negociacoes.map((item) => {
                        return `
                            <tr>
                                <td>${DateHelper.dateToText(item.data)}</td>
                                <td>${item.quantidade}</td> <!-- o valor do getter do Model -->
                                <td>${item.valor}</td>
                                <td>${item.volume}</td>
                            </tr>
                        `;
                    }).join('')} <!-- O join para concatenar a string é necessario -->
                </tbody>
            
                <tfoot>
                    <td colspan="3"></td>
                    <td>
                        ${
                            model.negociacoes.reduce((total,item) => total + item.volume, 0.0)
                        }
                    </td>
                </tfoot>
            </table>
        `;
    }

    // Uma funcao function() {} retorna a funcao, para que o valor do return dela seja aplicado, ela deve estar como
    // funcao imediata: (function(){})(); invocando a funcao, pegando seu retorno

    // Total mais feioso
    // <td>
    // ${
    //     (function() {
    //         let total = 0;
    //         model.forEach((item) => {
    //             total+= item.volume
    //         });
    //         return total;
    //     })()
    // }
    // </td>

    // update(model) {

    //     // Passa a string pra dentro do Dom, criando os respectivos elementos do Dom
    //     this._viewElement.innerHTML = this._template(model);
    // }
}
