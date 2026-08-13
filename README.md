<<<<<<< HEAD
# PBE12026

<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
</div>

Repositório com exercícios práticos de JavaScript, desenvolvidos durante o curso de Programação Básica em JavaScript.

## 📌 Descrição

Este projeto reúne atividades de lógica de programação, variáveis, estruturas condicionais, arrays e cálculos simples com Node.js. A proposta é praticar conceitos fundamentais da linguagem JavaScript e consolidar o aprendizado por meio de pequenos desafios e exercícios.

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
├── texto_para_gerar_readme.txt
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
- Exercícios de decisão e regra de negócio

### Aula 05

- Arrays
- Acesso por índice
- Manipulação de listas e dados em sequência

### Aula 06 e Aula 07

- Acompanhamento das próximas atividades e exercícios do curso.

## ▶️ Como executar os arquivos

Certifique-se de ter o Node.js instalado em sua máquina.

### 1. Verificar a instalação

```bash
node -v
```

### 2. Entrar na pasta da aula

```bash
cd aulas/aula-01
```

### 3. Executar um arquivo JavaScript

```bash
node app.js
```

Também é possível rodar outros arquivos da mesma forma:

```bash
node imc.js
node padaria.js
node notas.js
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
=======
# PBE12026 - Exercícios de Programação (Prof. Celso Ricardo Carvalho)

Este repositório contém exercícios de programação em JavaScript desenvolvidos nas aulas do curso PBE12026. Os arquivos demonstram conceitos básicos como variáveis, entrada/saída, estruturas condicionais, laços, arrays e pequenas aplicações de exemplo.

**Tecnologias utilizadas**

- Node.js
- Biblioteca: `readline-sync` (para entrada via terminal)

**Estrutura de pastas**

- Aula1/ - Exercícios introdutórios (variáveis, entrada, saída e calculadoras simples)
- Aula 2/ - Strings, versões alternativas de exercícios e exemplos de IMC (alguns arquivos vazios)
- Aula 3/ - Condicionais (ex.: verificação de velocidade, médias e idade)
- Aula4/ - Estruturas de repetição (for, while) e pequenos desafios
- Aula5/ - Arrays, agregação e pequenos sistemas interativos

**Resumo dos exercícios por aula**

- Aula1/
  - `ola_mundo.js`: Exemplo clássico "Olá, mundo!".
  - `app.js`: Exemplo simples de variáveis e impressão.
  - `imc.js`: Calculadora de IMC com entrada via `readline-sync`.
  - `padaria.js`: Cálculo de venda (preço unitário × quantidade) e exibição.
  - `produtos.js`: Sistema de venda com entrada do usuário e recibo formatado.
  - `variaveis.js`: Demonstração de tipos e `typeof`.

- Aula 2/
  - `strings.js`: Uso de concatenação e template strings.
  - `padaria_nova.js`: Sistema de troco com `readline-sync` (cliente, preço, troco).
  - `imc.js`: Arquivo presente, mas atualmente vazio.

- Aula 3/
  - `balada.js`: Verificação de idade para acesso (>= 18).
  - `notas.js`: Leitura de notas, cálculo de média e situação (Aprovado/Recuperação/Reprovado).
  - `velocidade.js`: Verifica velocidade e aplica faixas de multa.

- Aula4/
  - `contador.js`: Exemplo de `while` com incremento de 5 em 5.
  - `contador_for.js`: Uso de `for` para contar até 50 em passos de 5.
  - `tabuada.js`: Gera a tabuada de um número com `for`.
  - `menu_padaroa.js`: Menu interativo com `while` e opções (venda, horário, sair).
  - `ex1.js`: Contador `while` simples (1..5).
  - `desafio_etanol.js`: Verifica se compensa abastecer com álcool (regra dos 70%).
  - `desafio_foguete.js`: Contagem regressiva com `for`.
  - `desafio_natacao.js`: Classificação por faixas etárias.

- Aula5/
  - `array.js`: Demonstração básica de array e acesso por índice.
  - `array1.js`: Uso de `.length` e acesso ao primeiro elemento.
  - `array2.js`: Sistema que coleta pesos em um array, calcula média e decide aprovação.
  - `ex1.js`: Soma de preços até o usuário digitar `0`.
  - `sistema.js`: Loop interativo que acumula preços (pode exigir `readline-sync` em algumas versões).

**Como executar (Node.js)**

1. Instale o Node.js (versão LTS recomendada): https://nodejs.org/
2. No terminal, instale dependências (na raiz do projeto):

```bash
npm install
```

3. Execute um exercício com o comando `node` apontando para o arquivo desejado. Exemplos:

```bash
node Aula1/ola_mundo.js
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
