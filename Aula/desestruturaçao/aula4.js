// Tente desestruturar o primeiro objeto do array para extrair as
// propriedades marca e ano em variáveis separadas. Em seguida, utilize o console.log para
// exibir essas variáveis.

const carros = [
  { marca: "Toyota", modelo: "Corolla", ano: 2020 },
  { marca: "Honda", modelo: "Civic", ano: 2019 },
  { marca: "Ford", modelo: "Focus", ano: 2021 },
];
const { marca0, ano0 } = carros[0];
console.log(marca0, ano0);
