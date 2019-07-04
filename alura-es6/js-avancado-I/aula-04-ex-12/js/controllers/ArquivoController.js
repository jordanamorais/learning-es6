class ArquivoController {

    constructor() {
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {
        //cria um Arquivo com as suas propriedades;
        let dadosInputados = this._inputDados.value;
        let newFile = this._separaDadosArquivo(dadosInputados);

        // exibe mensagem no console com os dados do arquivo.
        // acessando como se fosse propriedade porque os métodos estao com get na Classe do Model
        console.log(`Dados do arquivo: ${newFile.nome}, ${newFile.tamanho}, ${newFile.tipo}`);

        this._limpaFormulario();
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }

    _separaDadosArquivo(dadosInputados) {

        // Melhor criar um helper para se isso for usado futuramente
        // return new Arquivo(
        //      ...this._inputDados.value.split('/').map(item => item.toUpperCase())
        // )

        // Usando o Helper
        return ArquivoHelper.createFile(dadosInputados);

    }
}