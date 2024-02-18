// Agora, sua tarefa é criar uma função chamada encontrarLivroPorAno que recebe o array livros e
// um ano como parâmetro e retorna o título do livro publicado naquele ano. Se nenhum livro for
// encontrado para o ano fornecido, a função deve retornar uma mensagem indicando que nenhum
// livro foi encontrado.

const livros = [
  {
    titulo: "Aventuras de Sherlock Holmes",
    autor: "Arthur Conan Doyle",
    ano: 1892,
  },
  { titulo: "1984", autor: "George Orwell", ano: 1949 },
  { titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", ano: 1967 },
];
function encontrarLivroPorAno(livro, anoProcurado) {
  const livrosEncontrados = [];

  for (let i = 0; i < livro.length; i++) {
    if (anoProcurado === livro[i].ano) {
      livrosEncontrados.push(livro[i].titulo);
    }
  }

  if (livrosEncontrados.length !== 0) {
    for (let i = 0; i < livrosEncontrados.length; i++) {}
    return livrosEncontrados;
  } else {
    return "Não foram encontrados livros";
  }
}

const livrosEncontrados = encontrarLivroPorAno(livros, 1967);
console.log(livrosEncontrados);
