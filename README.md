# PBE12026 - Backend Node.js Exercícios

## Descrição do projeto

Este repositório contém exercícios de programação backend em JavaScript usando Node.js, organizados por aulas. O projeto inclui exemplos de entrada e saída no terminal, manipulação de variáveis, cálculos matemáticos, controle de fluxo e uso de bibliotecas simples como `readline-sync`.

## Tecnologias utilizadas

- Node.js
- JavaScript
- npm
- Biblioteca `readline-sync` para entrada de dados no terminal

## Estrutura de pastas

- `Aula1/` - Exercícios introdutórios com variáveis, `console.log` e cálculos simples.
- `Aula 2/` - Exercícios de entrada de dados, processamento e saída formatada.
- `Aula 3/` - Exercícios com controle de fluxo usando `if`, `else if` e `else`.
- `node_modules/` - Dependências instaladas pelo npm.
- `package.json` - Configuração do projeto e dependências.
- `package-lock.json` - Versão travada das dependências.
- `texto_para_gerar_readme.txt` - Instruções para gerar o README.

## Resumo dos exercícios

### Aula 1

- `ola_mundo.js` - Exibe uma mensagem simples no console.
- `app.js` - Exemplo básico com variáveis e saída de dados.
- `variaveis.js` - Demonstração de diferentes tipos de variáveis e uso de `typeof`.
- `padaria.js` - Calcula o valor total de uma venda simples de padaria.
- `produtos.js` - Sistema de vendas que recebe dados do usuário e calcula o total.
- `imc.js` - Calculadora de IMC com entrada de nome, peso e altura usando `readline-sync`.

### Aula 2

- `strings.js` - Mostra concatenação de strings e template strings.
- `padaria_nova.js` - Sistema de troco para padaria, que calcula total e troco.

### Aula 3

- `balada.js` - Verifica a idade e libera ou nega acesso à balada.
- `notas.js` - Calcula a média de duas notas e exibe a situação do aluno.
- `velocidade.js` - Avalia a multa de trânsito com base na velocidade.

## Instruções para executar os arquivos com Node.js

1. Abra o terminal na pasta `PBE12026`.
2. Instale as dependências, se ainda não estiverem instaladas:

```bash
npm install
```

3. Execute um script específico com Node.js:

```bash
node Aula1/ola_mundo.js
node Aula1/app.js
node Aula1/variaveis.js
node Aula1/padaria.js
node Aula1/produtos.js
node Aula1/imc.js
node "Aula 2"/strings.js
node "Aula 2"/padaria_nova.js
node "Aula 2"/imc.js
node "Aula 3"/balada.js
node "Aula 3"/notas.js
node "Aula 3"/velocidade.js
```

4. Para scripts que usam `readline-sync`, responda às perguntas exibidas no terminal.

## Instruções de Git

1. Inicialize o repositório (se ainda não estiver inicializado):

```bash
git init
```

2. Adicione todos os arquivos:

```bash
git add .
```

3. Faça um commit com uma mensagem descritiva:

```bash
git commit -m "Adicionar README e exercícios de Node.js"
```

4. Caso use um repositório remoto, conecte e envie:

```bash
git remote add origin <URL_DO_REPOSITORIO>
git push -u origin main
```

## Autor

Prof. Celso Ricardo Carvalho

Acesse cada pasta da aula e instale as dependências:

```bash
cd Aula1
npm install
```

```bash
cd "Aula 2"
npm install
```

```bash
cd "Aula 3"
npm install
```

## Execução com Node.js
Os arquivos podem ser executados diretamente no terminal com o comando `node`.

### Aula 1
```bash
cd Aula1
node ola_mundo.js
node app.js
node variaveis.js
node padaria.js
node produtos.js
node imc.js
```

### Aula 2
```bash
cd "Aula 2"
node strings.js
node padaria_nova.js
```

### Aula 3
```bash
cd "Aula 3"
node velocidade.js
node balada.js
node notas.js
```

> Alguns arquivos, como `imc.js`, `produtos.js`, `padaria_nova.js`, `velocidade.js`, `balada.js` e `notas.js`, solicitam dados no terminal. Digite as informações quando solicitado.

## Resumo dos exercícios

### Aula 1
- `ola_mundo.js`: primeiro programa em JavaScript, exibindo uma mensagem no console.
- `app.js`: exemplo simples com variáveis e saída de dados.
- `variaveis.js`: demonstração de diferentes tipos de variáveis e o uso de `typeof`.
- `padaria.js`: cálculo do valor total de uma venda simples de padaria.
- `produtos.js`: sistema de vendas que recebe dados do usuário via terminal.
- `imc.js`: calculadora de IMC com entrada de nome, peso e altura.

### Aula 2
- `strings.js`: estudo de template strings para concatenar valores de forma mais clara.
- `padaria_nova.js`: sistema de troco para uma padaria, com cálculo do valor total e do troco a ser devolvido.

### Aula 3
- `velocidade.js`: exercício com estrutura condicional para verificar a velocidade e calcular a multa.
- `balada.js`: validação de idade para liberar ou negar o acesso a uma balada.
- `notas.js`: cálculo de média escolar e classificação do aluno em aprovado, recuperação ou reprovado.

## Exemplos de comandos
```bash
node ola_mundo.js
node imc.js
npm install
git status
```

## Instruções de Git
```bash
git status
git add .
git commit -m "Atualização dos exercícios"
git push origin main
```

Se o repositório ainda não estiver inicializado:
```bash
git init
```

## Autor
Prof. Celso Ricardo Carvalho
