// Nao tem constructor nem tem propriedade
// Se nao se acrescenta o constructor, por padrao é como se tivesse o constructor vazio
class DateHelper {

    // Pra ficar claro pro desenvolvedor que nao pode ser instanciada com um new
    // O erro é exibido no console quando se tenta instanciar a classe via new DateHelper();
    constructor() {
        throw new Error('Esta classe não pode ser instanciada');
    }

    // Para que o Helper seja invocado diretamente sem fazer uma instancia por fora (new...)
    // define-se os métodos como estaticos.
    static textToDate(texto) {

        // Regex para a data
        // ---

        // Se nao segue o padrao de retorno de data pro Date, exiba a mensagem de erro
        // A REGEX é quem tem o .test pra testar o valor e nao nativamente o JS
        // Com test, pedimos que a expressão teste se o texto segue o padrão
        // \D - Maiusculo, qualquer coisa que nao seja numero


        // Em REGEX ^ = começando com e $ = terminando com. Para garantir que o usuario nao insira mais de 4 digitos no ano
        // ou mais de 2 digitos nas datas
        console.log('TESTE DATA ' + texto);

        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
            throw new Error('Deve estar no formato aaaa-mm-dd');
        };

        return new Date(
                        ...texto.split('-')
                                // Usando .map para retornar o segundo indice do array decrementado de 1
                                // --------
                                // .map((item, indice) => {
                                //     // if(indice == 1) { // Se for o indice 2
                                //     //     return item - 1; // Mesmo sendo string o JS faz a conversao implicita pra fazer o calculo
                                //     // }
                                //     // return item;
                                // })

                                // SOLUCAO MENOS VERBOSA, sem o if, usando modulo
                                // --------
                                // return item - indice % 2; // no segundo indice, 1 modulo de 2 é 1.
                                // O uso de arrow functions omite a palavra function, através do uso da flecha
                                //      Quando se tem uma unica instruçao dentro da arrow function, pode-se retirar as chaves e por a instrucao inline
                                //      retirando, inclusive, o return, pois a arrow function ja faz isso, quando so tem uma unica instrucao.
                                .map((item, indice) => item - indice % 2)

                                // o Map da Programacao funcional, returna um novo array igual trazendo os dados de acordo com a
                                // funcao de callback dentro dele.
                                // o Map aceita receber como segundo parametro o indice do array.
                    )
    }

    static dateToText(data) {

        // Abordagem normal
        // ---
        // return data.getDate() 
        //             + '/' + (data.getMonth() + 1) // guarda dentro de um array que vai de 0 a 11
        //             + '/' + data.getFullYear();

        // Abordagem com Template Strings do ES6
        // Backstick - crase no começo e crase no final, pra fechar.
        // ---
        // Pode pular linha sem por o + pra concatenar
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;

    }

}