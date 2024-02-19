// A sua tarefa é criar uma função chamada encontrarFilmePorDiretor que recebe o array de filmes e
// um nome de diretor como parâmetro. A função deve retornar um array com os títulos dos filmes dir
// igidos pelo diretor fornecido. Se nenhum filme for encontrado para o diretor fornecido, a função
// deve retornar uma mensagem indicando que nenhum filme foi encontrado.

const filmes = [
  { titulo: "Matrix", diretor: "Lana Wachowski", ano: 1999 },
  { titulo: "Pulp Fiction", diretor: "Quentin Tarantino", ano: 1994 },
  { titulo: "Inception", diretor: "Christopher Nolan", ano: 2010 },
  { titulo: "The Shawshank Redemption", diretor: "Frank Darabont", ano: 1994 },
];

function encontrarFilmePorDiretor(array, diretor) {
  const filmesEncontrados = [];

  for (let i = 0; i < array.length; i++) {
    if (diretor === array[i].diretor) {
      filmesEncontrados.push({
        titulo: array[i].titulo,
        diretor: array[i].diretor,
        ano: array[i].ano,
      });
    }
  }

  if (filmesEncontrados.length !== 0) {
    return filmesEncontrados;
  } else {
    return `Não foram encontrados filmes com o diretor: ${diretor}`;
  }
}

const filmesEncontrados = encontrarFilmePorDiretor(filmes, "Frank Darabont");
console.log(filmesEncontrados);
