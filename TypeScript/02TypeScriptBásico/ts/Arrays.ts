const numero = [10, 20, 40, 30, 90, 1];
const valores = [10, "Taxas", 40, "Produto", 90, 1];

function maiorQueDez(data: Array<number>) {
  return data.filter((n) => n > 10);
}

function filtrarValores(data: Array<string | number>) {
  return data.filter((item) => typeof item === "string");
}

const livros = [
  ["Senhor dos Aneis", 80],
  ["A guerra dos tronos", 120],
];

console.log(maiorQueDez(numero));
console.log(filtrarValores(valores));
console.log(livros);
