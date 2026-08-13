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
