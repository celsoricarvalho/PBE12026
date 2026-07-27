# PBE12026 - Exercícios de JavaScript

## Descrição
Este repositório reúne exercícios introdutórios de JavaScript e Node.js desenvolvidos durante as aulas de programação. O projeto aborda conceitos básicos como variáveis, tipos de dados, entrada e saída no terminal, cálculos matemáticos, template strings e interação com o usuário.

## Tecnologias utilizadas
- JavaScript
- Node.js
- npm
- readline-sync

## Estrutura de pastas
```text
Javascript/
├── Aula1/
│   ├── app.js
│   ├── imc.js
│   ├── ola_mundo.js
│   ├── package.json
│   ├── padaria.js
│   ├── produtos.js
│   └── variaveis.js
├── Aula 2/
│   ├── package.json
│   ├── padaria_nova.js
│   └── strings.js
├── Aula 3/
│   ├── balada.js
│   ├── notas.js
│   ├── package.json
│   └── velocidade.js
└── README.md
```

## Requisitos
Antes de executar os arquivos, certifique-se de ter instalado:
- Node.js
- npm

## Instalação
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
