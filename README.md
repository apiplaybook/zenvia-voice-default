# zenvia-voice-default

Este repositório contém a aplicação criada no artigo tutorial da [Prensa.li](https://prensa.li/) sobre como [Automatizar SMS de voz para cobrança com API de voz Zenvia](https://prensa.li/zenvia/automatizar-sms-de-voz-para-cobranca-com-api-de-voz-zenvia).

## Como executar

### Cofiguração inicial

Para executar esta aplicação você precisa fazer o cadastro no [site da API](https://www.totalvoice.com.br/signup.php), preencher as informações e clicar em "_CRIAR_". Após criar a conta, é preciso confirmar o número de celular e o endereço de e-mail para ter acesso ao painel. Após confirmar suas informações é possível acessar o painel e adquirir o _Access Token_ para se autenticar nas requisições à API.

Com o _Access Token_ em mãos, renomeie o arquivo [`.env.example`](./.env.example) para `.env` e coloque o token na variável `VOICE_TOKEN`.

### Requisitos

- [node.js](https://nodejs.org/en/download/) 8 ou versão superior
- [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) (opcional, mas recomendado)

### Executando o projeto

Clone o projeto

```bash
git clone https://github.com/apiplaybook/zenvia-voice-default.git
```

Após clonar o projeto e fazer as configurações necessárias, dentro da pasta, execute:

```bash
npm run dev
```

ou

```bash
yarn dev
```
