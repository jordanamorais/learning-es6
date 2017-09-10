# Learning ES6

My useful notes about ES6.

## Dicas e definições

* Funções de callback são executadas depois.
* Convenção para uso de classes em JS: primeira letra do arquivo JS em maiúsculo.
* Na Orientaçao a Objetos dado e comportamento caminham juntos (abstração: líquido da cerveja que só pode ser acessado com um abridor). Na programação Procedural os dados e comportamento andam separados e gera mais repetição de codigo (má prática). O paradigma orientado a objetos vem resolver muitos dos problemas da programação procedural.
* JavaScript é uma linguagem multiparadigma, podemos programar proceduralmente, funcionalmente e orientado a objetos

* MVC = Model, View, Controller. Paradigma da Orientaçao a Objetos.
    * Controller - Onde as ações do usuários são interceptadas.
    * Model - O Controller altera o dado, que é o Model. Onde ficam as regras de Negócio. Pra onde se leva o model, as regras de negócio vao. É uma abstração de algo do mundo real (modelo de negociação).
    * View - Se atualiza pra exibir o estado mais atual do Model.

* Vanilla JS = Prática de uso de Javascript Puro.

* TypeScript da Microsoft permite definir atributos privados com o modificador private. TypeScript nada mais é do que um superset do ES2015+ com a adição de novos recursos, inclusive aquele que define atributos privados.bro
* Obter raiz quadrada:

```javascript
    Math.sqrt(num);
```
* Em JS uma string sem conteúdo é dada como "false";

## ES6 Features

* Let
* arrow functions
    * Arrow functions com apenas uma linha pode-se omitir as chaves e o return.
* spread operator (...)
* map, filter ande reduce (Paradigmas de programação funcional)
* Uso de classes, construtores, métodos estaticos.. etc como em Java.
* Template strings, utilizando back sticks (`).
* Atribuir um valor default para o paramtro de um constructor ou de métodos.
    ex.: constructor(texto='') {...}
* ...
* Herança:
   * Por padrão, quando uma classe herda outra, ela também herda seu construtor.
   * Quando temos um construtor na classe filha que recebe uma quantidade de parâmetros diferentes do construtor da classe pai, para que o this seja inicializado com um valor, precisamos chamar o construtor da classe pai, passando os parâmetros que ela precisa.
   * A chamada do construtor da classe pai deve ser a primeira instrução no construtor da classe filha.
   * [ ] TO DO: Ler [este artigo sobre herança](http://blog.caelum.com.br/como-nao-aprender-orientacao-a-objetos-heranca/)

## TypeScript

* TypeScript que se baseia no JavaScript, já possui vários recursos que ainda não existem no JavaScript, incluindo classes abstratas.
* Com TypeScript poderíamos usar a palavra chave abstract que proíbe instanciar objetos dessa classe. Ex.:
```javascript
abstract class View {
    ...
}
```

## REGEX

* Sempre começa entre / ..regex .../
* \d = digitos
* \D = não digitos
* \d{4} = limitar a 4 digitos
* - = separar
* g = global
* ^ = começa com
* $ = termina em
* ...

## MVC

* Normalmente, a View (e cada pedaço dela) deve ser sincronizado ao Modelo.
* A view terá uma classe que irá encapsular a apresentação que eu quero apresentar pro usuário.
* O React usa o padrão de componentização de views (templates) via javascript.
    * No React declaramos nossos componentes de view usando o JSX que permite escrever HTML mais facilmente no mundo JS.
    
* O AngularJS usa outra abordagem: a de declarar as views num arquivo HTML.


## Programação Funcional

* Map - Retorna a copia de um array
    Ex.:

    ```javascript
        .map((item, indice) => {
            if(indice == 1) { // Se for o indice 2
                return item - 1; // Mesmo sendo string o JS faz a conversao implicita pra fazer o calculo
            }
            return item;
        })
    ```

* Reduce - Processa um array e no final me da um único resultado.
    .reduce(function(total, item) {}, 0.0), onde o total já é o resultado do incremento e o item o item percorrido do array.
    O segundo parametro do reduce (depois da funcao) é a inicialização da variável: total.

    Ex.:

    ```javascript
    model.negociacoes.reduce(function(total,item){
        return total + item.volume;
    }, 0.0)
    ```

    Modelo simplificado, com arrow function:

    ```javascript
    model.negociacoes.reduce((total,item) => total + item.volume, 0.0)
    ```

* Filter - 
