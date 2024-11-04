# Desafio Code Elevate - Frontend - SWAPI

Repositório com a solução em frontend Angular do desafio da Code Elevate.

Projeto desenvolvido utilizando:
- Angular 18
- Angular Material para a interface.

## Instalação e configuração

Para instalar o projeto, é necessário ter o Node.js na versão 18.20 ou maior (recomendado utilizar NVS/NVM) e o Angular CLI instalados. Para instalar o Angular CLI, execute o comando abaixo:

```bash
npm install -g @angular/cli
```

Após a instalação do Angular CLI, clone o repositório e execute o comando abaixo para instalar as dependências do projeto:

```bash
npm install
```

## Execução do projeto como produção

Para executar o projeto como produção, execute o comando abaixo para fazer o build:

```bash
npm run build
```

ou

```bash
ng build
```

Após a execução do comando, será gerado a pasta `dist/` com os arquivos de produção. Para executar o projeto, execute o comando abaixo:

```bash
npm run serve:ssr
```

ou

```bash
node dist/server/server.mjs
```

Após a execução do comando, navegue para `http://localhost:4000/`.

### Usuário padrão para autenticação
- Usuário padrão: `user`
- Senha padrão: `pass`

## Execução do projeto como desenvolvimento

Para executar o projeto, execute o comando abaixo:

```bash
npm run start
```

ou

```bash
ng serve
```

Após a execução do comando, navegue para `http://localhost:4200/`.

### Usuário padrão para autenticação
- Usuário padrão: `user`
- Senha padrão: `pass`

## Execução de testes unitários

Para executar os testes unitários, execute o comando abaixo:

```bash
npm run test
```
