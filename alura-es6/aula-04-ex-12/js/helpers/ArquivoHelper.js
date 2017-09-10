class ArquivoHelper {

    // Caso tente acessar via instancia com new, exibe o erro.
    constructor () {
        throw new Error('Você não pode criar uma instância dessa classe');
    }

    static createFile(dados) {
        
        return new Arquivo(
            // nome,
            // tamanho,
            // valor

            // Spread operator desmembra passando os itens como parametro
            // Split devolve um array.
            // o map cria um novo array copia com os valores percorridos
            ...dados.split('/').map(item => item.toUpperCase())
        );
    }
}