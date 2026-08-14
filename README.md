# PBE12026

<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
</div>

Repositório com exercícios práticos de JavaScript, desenvolvidos durante o curso de Programação Básica em JavaScript.

## 📌 Descrição

Este projeto reúne atividades de lógica de programação, variáveis, estruturas condicionais, arrays, laços de repetição e pequenos desafios com Node.js. A proposta é praticar conceitos fundamentais da linguagem JavaScript e consolidar o aprendizado por meio de exercícios e desafios de programação.

## 🛠️ Tecnologias utilizadas

- JavaScript
- Node.js
- Biblioteca `readline-sync` para leitura de dados no terminal
- Git e GitHub para versionamento

## 📁 Estrutura do projeto

```text
PBE12026/
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── node_modules/
├── aulas/
│   ├── aula-01/
│   │   ├── app.js
│   │   ├── imc.js
│   │   ├── ola_mundo.js
│   │   ├── padaria.js
│   │   ├── produtos.js
│   │   ├── variaveis.js
│   │   └── package.json
│   ├── aula-02/
│   │   ├── imc.js
│   │   ├── padaria_nova.js
│   │   ├── strings.js
│   │   └── package.json
│   ├── aula-03/
│   │   ├── balada.js
│   │   ├── notas.js
│   │   ├── velocidade.js
│   │   └── package.json
│   ├── aula-04/
│   │   ├── contador.js
│   │   ├── contador_for.js
│   │   ├── desafio_etanol.js
│   │   ├── desafio_foguete.js
│   │   ├── desafio_natacao.js
│   │   ├── desafio3.js
│   │   ├── desafios/
│   │   │   └── desafio3.js
│   │   ├── ex1.js
│   │   ├── menu_padaroa.js
│   │   └── tabuada.js
│   ├── aula-05/
│   │   ├── array.js
│   │   ├── array1.js
│   │   ├── array2.js
│   │   ├── ex1.js
│   │   └── sistema.js
│   ├── aula-06/
│   │   └── (em desenvolvimento)
│   └── aula-07/
│       └── (em desenvolvimento)
└── .idea/
```

## 📚 Resumo das aulas

### Aula 01

- Primeiros passos com JavaScript
- Uso de `console.log()`
- Declaração de variáveis
- Exercícios de cálculo de IMC
- Simulação de venda na padaria
- Manipulação básica de dados

### Aula 02

- Trabalhando com strings
- Template strings
- Melhorando a apresentação de textos e valores
- Revisão de operações com variáveis

### Aula 03

- Entrada de dados com `readline-sync`
- Cálculo de média
- Estruturas condicionais
- Situação do aluno: aprovado, recuperação ou reprovado
- Lógica de decisão simples

### Aula 04

- Estruturas de repetição
- Contadores
- Desafios de lógica
- Cálculo de etanol x gasolina
- Sistema de controle de acesso ao laboratório
- Exercícios de decisão e regra de negócio

### Aula 05

- Arrays
- Acesso por índice
- Manipulação de listas e dados em sequência
- Exemplos de uso de `.length`
- Exercícios com nomes de alunos

### Aula 06 e Aula 07

- Acompanhamento das próximas atividades e desafios do curso.

## ▶️ Como executar os arquivos

Certifique-se de ter o Node.js instalado em sua máquina.

### 1. Verificar a instalação

```bash
node -v
```

### 2. Entrar na pasta da aula

```bash
cd aulas/aula-04
```

### 3. Executar um arquivo JavaScript

```bash
node desafio_etanol.js
```

Também é possível rodar outros arquivos da mesma forma:

```bash
node contador.js
node tabuada.js
node ../aula-05/array2.js
```

## 🌿 Git

### Inicializar o repositório

```bash
git init
```

### Adicionar arquivos

```bash
git add .
```

### Registrar a versão

```bash
git commit -m "Primeiro commit"
```

### Criar a branch principal

```bash
git branch -M main
```

### Conectar ao GitHub

```bash
git remote add origin <URL_DO_REPOSITORIO>
```

### Enviar para o GitHub

```bash
git push -u origin main
```

## 👨‍🏫 Autor

Prof. Celso Ricardo Carvalho

## 📝 Observação

Este repositório está em evolução conforme os exercícios e desafios do curso forem sendo desenvolvidos.

node "Aula 2/padaria_nova.js"
node "Aula 3/notas.js"
node Aula4/tabuada.js
node Aula5/array2.js
```

Observação: Alguns arquivos usam `readline-sync` para entrada no terminal; garantir que as dependências estejam instaladas com `npm install` antes de executar.

**Instruções básicas de Git**

1. Inicializar repositório (se ainda não estiver inicializado):

```bash
git init
git add .
git commit -m "Adicionar exercícios PBE12026"
```

2. Conectar a um repositório remoto e enviar as alterações:

```bash
git remote add origin <URL_DO_REPOSITORIO>
git branch -M main
git push -u origin main
```

3. Fluxo comum de trabalho:

```bash
git status
git add <arquivos>
git commit -m "Mensagem descritiva"
git push
```

**Autor**

Prof. Celso Ricardo Carvalho
>>>>>>> 5f1103d819df874da81779a5c97ee7b636f29346
