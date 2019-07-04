class NegociacaoController {

    // atributos, elementos da minha pagina
    // será utilizado pra fazer como se fosse um "cache" 
    constructor() {

        // Dessa maneira, agora o $ funciona correto, como no jQuery, porque o bind faz o querySelector
        // ainda manter a relação com o document. O this ainda faz referencia com o document.
        // A função bind, presente em todas as funções, permite indicar qual será o valor de this quando ela for executada
        let $ = document.querySelector.bind(document);

        // Dessa maneira o DOM ira guardar os elementos na classe para serem reusados, buscando-os apenas 1 vez.
        // manter a boa pratica/convencao de por um "_" de indicar ao programador como atributos privados.
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        // passa o elemento onde será renderizada a tabela (template string) no Dom.
        // Deu pra usar o $ como jQuery por conta do $ criado acima
        this._negociacoesView = new NegociacoesView($('#negociacoesView')); 

        // Renderizar a tabela dentro do Dom. O Update é um método dentro do NegociacoesView
        // Já inicia renderizada
        this._negociacoesView.update(this._listaNegociacoes);

        // Usando o model Mensagem
        this._mensagem = new Mensagem();

        // View Mensagem
        this._mensagemView = new MensagemView($('#mensagem-view'));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {
        event.preventDefault();

        // OBS: um metodo pertence a um objeto. Uma funçao é solta, independente.
        // Abaixo:
        //  Nao funcionaria pois o querySelector nao pertenceria mais ao document. o This do querySelector faz
        //  referencia ao document.
        //let $ = document.querySelector; 

        // Dessa maneira, agora o $ funciona correto, como no jQuery, porque o bind faz o querySelector
        // ainda manter a relação com o document.
        
        //let $ = document.querySelector.bind(document);

        // PERFORMANCE TIP:
        // Uma das coisas que tem que ser evitada ao máximo em JS é percorrer o DOM inúmeras vezes
        // Toda vez que executa o querySelector ele vai percorrer a arvore desses elementos no DOM
        // POr isso, leva este codigo para o constructor, utilizando instancias com o this.

        // let inputData = $('#data');
        // let inputQuantidade = $('#quantidade');
        // let inputValor = $('#valor');

        // typeof para saber o tipo
        //console.log(typeof(this._inputData.value));

        // o valor do campo data está retornando aaaa-mm-dd
        // passando um array pro Date e dando um split no -
        // new Date("2016,11,12"); Se passasse um array entre [] ele usaria join com , para juntar como esta aqui
        // Poderia usar tambem um .replace() passando uma expressao regular
        // Expressao regular em JS usa / /.
        
        // Formas de criar um objeto Date:
        // new Date("2016/11/12");
        // new Date(['2016', '11', '12']);
        // new Date(2016, 11, 12); o mes 11 seria dezembro, pois dessa forma incrementa de 0 a 11
        //      Forma mais dificil de tratar.

        // let outraData = new Date('2016/05/17'); 
        // console.log(outraData.getDate()); // imprime 17
        // console.log(outraData.getMonth()); // imprime 4
        // console.log(outraData.getFullYear()); // imprime 2016

        // Solucao 1 para criar um objeto Date:
        // ---------
        // Criando um array separando os 3 elementos
        // let data = new Date(this._inputData.value.split('-')); // Vira um array com 3 elementos

        // Solucao 2 para criar um objeto Date:
        // ---------
        // Troque todos os hifens de todas as ocorrencias da string g (global) por virgula.
        // Em suma, Troque todo mundo que é hifen por virgula.
        // let data = new Date(this._inputData.value.replace(/-/g, ','));

        // Solucao 3 para criar um objeto Date:
        // ---------
        // 1 - transforma a string num array, com split
        // 2 - usa o spread operator do ES6 (...) permite passar um array como parametro
        //     ele entenderá que o array terá que ser desmembrado:
        //     primeiro item do array vai pro primeiro do constructor do Date, segunda pro segundo e etc..
        // 3 - Usa o map da programacao funcional para pegar o segundo indice do array e decrementar

        // adicionar a negociacao em uma lista
        // deve ser o UNICO caminho para adicionar uma negociacao
        this._listaNegociacoes.adiciona(this._criaNegociacao());

        // Feedback para quando adicionar a negociacao
        this._mensagem.texto = 'Negociação adicionada com sucesso!';
        this._mensagemView.update(this._mensagem);

        // Atualiza a renderizaçao da lista na tabela depois de adicionada uma nova lista
        this._negociacoesView.update(this._listaNegociacoes);
        this._limpaForm();

        // Uma das maneiras de apagar/resetar um array
        // this._listaNegociacoes.negociacoes.length = 0;
        
        // console.log(this._listaNegociacoes.negociacoes);
    }

    apaga() {

        this._listaNegociacoes.esvazia();

        // atualizar minha view com este novo estado (tabela limpa).
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociações apagadas com sucesso';
        this._mensagemView.update(this._mensagem);
    }

    // o _ indica que esse metodo so pode ser chamado pela classe NegociacaoController
    _limpaForm() {

        // Reseta os campos para os seguintes valores
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        
        // setar o focus do mouse já pra o primeiro item do form.
        this._inputData.focus();
    }

    // _ na frente = convencao par ametodo privado
    _criaNegociacao() {

        // Isolando a responsabilidade das manipulações de Data pra Classe Helper (Ajudante)
        let data = DateHelper.textToDate(this._inputData.value);

        console.log('DATA ' + data);

        // Passo,para o construtor de Model, os dados do formulario
        return new Negociacao (
            //this._inputData.value, // é preciso converter a data de string para objeto data
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
}