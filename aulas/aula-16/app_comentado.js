/**
 * AULAS 14 E 15 — JAVASCRIPT BACK-END | CRUD: READ
 * Sistema de consultas de máquinas industriais
 *
 * OBJETIVO: Ler os dados salvos em maquinas.json e fazer consultas.
 * READ significa LER os dados existentes, sem alterar o arquivo JSON.
 *
 * COMO EXECUTAR:
 * 1. Coloque este arquivo na mesma pasta de maquinas.json.
 * 2. Se quiser usar o nome app.js, renomeie este arquivo para app.js.
 * 3. Abra o terminal nessa pasta e execute: node app.js
 */

// fs (file system) permite trabalhar com arquivos, inclusive ler seu conteúdo.
const fs = require('node:fs');

// path ajuda a montar caminhos de arquivos de modo compatível com o sistema.
const caminho = require('node:path');

// __dirname indica a pasta onde este script está salvo.
// Assim, encontramos maquinas.json mesmo que o terminal esteja em outra pasta.
const ARQUIVO = caminho.join(__dirname, 'maquinas.json');

// -------------------------------------------------------------------------
// 1) CARREGAR OS DADOS DO ARQUIVO JSON
// -------------------------------------------------------------------------
function carregarMaquinas() {
  // readFileSync(caminho, 'utf8') lê o arquivo como TEXTO (string).
  // 'utf8' informa a codificação dos caracteres do texto.
  const conteudo = fs.readFileSync(ARQUIVO, 'utf8');

  // JSON.parse transforma o TEXTO JSON em um valor JavaScript.
  // Neste projeto, o JSON contém uma LISTA (array) de objetos de máquinas.
  const maquinas = JSON.parse(conteudo);

  // Antes de consultar, verificamos se recebemos realmente uma lista.
  // Se não for um array, lançamos um erro com uma mensagem explicativa.
  if (!Array.isArray(maquinas)) {
    throw new Error('O arquivo JSON deve conter uma lista de maquinas.');
  }

  // return devolve a lista de máquinas para quem chamou esta função.
  return maquinas;
}

// -------------------------------------------------------------------------
// 2) LISTAR TODAS AS MÁQUINAS — forEach()
// -------------------------------------------------------------------------
// Parâmetro maquinas: array com os objetos carregados do arquivo.
function listarMaquinas(maquinas) {
  // forEach executa a função indicada UMA VEZ PARA CADA objeto do array.
  maquinas.forEach((maquina) => {
    // Em cada repetição, 'maquina' representa um dos objetos da lista.
    // ${...} insere valores dentro de uma string delimitada por crases (`).
    console.log(`${maquina.id} | ${maquina.nome} | ${maquina.status}`);
  });
  // forEach é usado aqui para MOSTRAR os dados; ele não cria outro array.
}

// -------------------------------------------------------------------------
// 3) BUSCAR UMA MÁQUINA PELO ID — find()
// -------------------------------------------------------------------------
// maquinas = lista de máquinas; id = identificador que queremos encontrar.
function buscarPorId(maquinas, id) {
  // find procura o PRIMEIRO objeto que atende à condição.
  // === compara valor e tipo; por exemplo, número 3 é diferente de texto '3'.
  // Se não existir o ID informado, find retorna undefined.
  return maquinas.find((maquina) => maquina.id === id);
}

// -------------------------------------------------------------------------
// 4) FILTRAR AS MÁQUINAS PELO STATUS — filter()
// -------------------------------------------------------------------------
function filtrarPorStatus(maquinas, status) {
  // filter percorre todos os itens e retorna um NOVO ARRAY
  // contendo apenas aqueles que atendem à condição.
  // Se nenhum item atender, retorna um array vazio: [].
  // Atenção às letras e acentos: a comparação deve coincidir com o JSON.
  return maquinas.filter((maquina) => maquina.status === status);
}

// -------------------------------------------------------------------------
// 5) FILTRAR AS MÁQUINAS PELO SETOR — filter()
// -------------------------------------------------------------------------
function filtrarPorSetor(maquinas, setor) {
  // É o mesmo raciocínio do filtro por status, mas usando a propriedade setor.
  return maquinas.filter((maquina) => maquina.setor === setor);
}

// -------------------------------------------------------------------------
// 6) EXECUTAR O PROGRAMA E EXIBIR OS RESULTADOS
// -------------------------------------------------------------------------
function executar() {
  // try: tenta executar operações que podem falhar, como abrir um arquivo.
  try {
    // Lemos o JSON uma vez e guardamos o array em uma variável.
    const maquinas = carregarMaquinas();

    console.log('\n=== TODAS AS MAQUINAS ===');
    listarMaquinas(maquinas); // Mostra cada máquina em uma linha.

    console.log('\n=== BUSCA PELO ID 3 ===');
    // ?? usa a mensagem à direita se a busca retornar null ou undefined.
    console.log(buscarPorId(maquinas, 3) ?? 'Maquina nao encontrada.');

    console.log('\n=== BUSCA PELO ID 99 ===');
    // Demonstra o resultado de uma pesquisa por um ID inexistente.
    console.log(buscarPorId(maquinas, 99) ?? 'Maquina nao encontrada.');

    console.log('\n=== MAQUINAS EM MANUTENCAO ===');
    // Neste JSON, o status é escrito exatamente como 'manutencao'.
    console.log(filtrarPorStatus(maquinas, 'manutencao'));

    console.log('\n=== MAQUINAS DO SETOR USINAGEM ===');
    // No arquivo de exemplo, o nome do setor é 'Usinagem'.
    console.log(filtrarPorSetor(maquinas, 'Usinagem'));
  } catch (erro) {
    // catch é executado quando ocorre algum erro dentro do try.
    // Por exemplo: arquivo não encontrado ou JSON inválido.
    console.error('Erro ao ler ou consultar o arquivo:', erro.message);
    process.exitCode = 1; // Informa ao sistema que o programa teve um erro.
  }
}

// Executa a demonstração apenas quando este arquivo é chamado diretamente.
// Ao importar estas funções em testes.js, evitamos executar as demonstrações.
if (require.main === module) {
  executar();
}

// Disponibiliza as funções para outros arquivos Node.js, como testes.js.
module.exports = {
  carregarMaquinas,
  listarMaquinas,
  buscarPorId,
  filtrarPorStatus,
  filtrarPorSetor,
};
