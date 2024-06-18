// null é um tipo primitivo que representa a ausência de valor. É comum em funções do DOM que fazem uma busca, retornarem null quando não são bem sucedidas.

// const button = document.querySelector("button");
// const config = localStorage.getItem("config");

// essa técnica se chama controle de flow
// if (button !== null) {
//   button.click();
// }

// null é um valor considerado false no js.
// if (button) {
//   button.click();
// }

// outra verificação se é null
// button?.click();

interface Product {
  name?: string; // o ? define que o valor é opcional
}

const jogo: Product = {
  name: "GOW",
};

const livro: Product = {};

console.log(jogo.name?.toLocaleLowerCase());
console.log(livro.name?.toLocaleLowerCase());
