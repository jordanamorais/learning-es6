## Notas sobre o curso Udemy - Javascript do Futuro (Especializa/Es6)

* Forked do curso:
  * https://github.com/jordanamorais/es6
  
### NodeJS

* Iniciou-se a partir de um projeto (V8) da Google para o Chrome.
* Pode-se rodar em qualquer ambiente, além do browser.
* O V8 foi a ferramenta que deu a capacidade para rodar o JS fora do browser e em servers.
* O Node é a implementação pra Desktop do V8.
* A Versão LTS é a versão normalmente mais estável (Long Term Support), recomendada para ser mais utilizada do que a Current Version.
* É recomendado instalar um _gestor de versão do node_ para ser mais fácil gerenciar versões do node para seu projeto.
    
### Ferramentas de gerenciamento de versões do Node

* *nvm-windows* -- Versão de gerenciador pra Windows.

* *n* -- Gestor de versões do Node para Mac. Disponível via _brew_. 

```bash
brew install n

// Instala a ultima versao LTS (recomendada)
n lts

// Instala a ultima versao estavel
n stable

// Instala, de fato, a ultima versao disponivel
n latest
```

### NPM, o gerenciador de pacotes do Node.

* O Node traz o *npm* (Node Package Managment). Gerenciador de pacotes do Node.

### VSCode

* Ótima opção free para se trabalhar com JS e TypeScript.
* Pode ser instalado via brew:

```bash
brew cask install visual-studio-code
```

* COMMAND + , abre a lista de User Settings do VSCode.
* COMMAND + B, abre ou fecha a lista de arquivos, plugins, etc.

#### Plugins interessantes

* vscode-icons
* Angular2 TypeScript Snippets
* Javascript (ES6) code snippets
* ESLint -- para ler arquivos de config de lint e nos dar o erro em tempo de desenvolvimento.
* TSLint -- linter para TypeScript

## Exemplo de script de configuração de ambiente

* https://gist.github.com/berardo/c19daa4809e3d8eab642fdf0fd60d9bd