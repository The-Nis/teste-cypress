# teste-cypress
Teste E2E com Cypress


## Instalação do Cypress
```
npm install cypress@9.1.1 --save -include=dev
```
<hr>

### Configuração do Cypress
```
npm init
```
**package name:** - nome do projeto <br>
**version:** - versão do projeto <br>
**description:** - descrição do projeto<br>
**entry point:** - <br>
**test command: npx cypress open** - comando que executara o script <br>
**git repository:** - repositório do git<br>
**keywords:** - palavras chave<br>
**author:** - autor do projeto<br>
**license:** - tipo de licensa<br>

```
npm i cypress --sav -dev
```
<hr>

### Iniciar o cypress
```
npm run test
```
<hr>

### Executar testes no terminal (background)

```
npx cypress run
```

Para gerar o relatório em HTML digite no terminal

```
npm i -D mochawesome
```
depois na pasta principal dento de cypress.config.js, dentro de module.exports e depois de setupNodeEvents insira as seguintes informações

```
"reporter": "mochawesome",
      "reporterOptions": {
      "reportDir": "cypress/report/mochawesome-report",
      "overwrite": true,
      "html": true,
      "json": false,
      "timestamp": "mmddyyyy_HHMMss"
      }
```
Será criada uma pasta chamada <b><i>report</i></b>, dentro dessa pasta tera a pasta <b><i>assets</i></b> e dentro dela o relatório em HTML.

<hr>

### Erro de timeout

Pode ocorrer um erro de timeout e se não abrir é só repetir o procedimento ou aumentar o tempo de verificação no arquivo verify.js no caminho:
node-modules\cypress\lib\tasks\verify.js
Basta localizar a contante:
```
const VERIFY_TEST_RUNNER_TIMEOUT_MS = +util.getEnv('CYPRESS_VERIFY_TIMEOUT') || 30000;
```
e alterar para:
```
const VERIFY_TEST_RUNNER_TIMEOUT_MS = +util.getEnv('CYPRESS_VERIFY_TIMEOUT') || 100000;
```

<hr>

### Extensões para VSCode

**Add Only (Ivan Ladyha)** - Adiciona ou remove o .only de um teste.<br>
**Cypress Helper (Oleksandr Shevtsov)** - Comandos customizados.<br>
**Cypress Snippets (Andrew Smith)** - Autocomplete com os principais comandos do cypress e atalhos.<br>
**ES6 Mocha Snippets (Cory Noonan)** - Autocomplete.<br>
**Fold Plus (Dakara)** - Minimiza um bloco de teste em uma linha.<br>
**Color Highlight (Sergii N)** - Parenteses, colchetes e chaves coloridos.<br>
**Material Icon Theme (Philipp Kief)** - Referêncial visual dos arquivos e pastas do projeto.<br>
**IntelliCode (Microsoft)** - Sugere os comandos mais utilizados.<br>
