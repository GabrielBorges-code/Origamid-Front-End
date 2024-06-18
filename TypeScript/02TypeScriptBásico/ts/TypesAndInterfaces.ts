type NumberOrString = string | number;

let total1: NumberOrString = 20;
total1 = 30;

interface IProduto {
  name: string;
  price: number;
  keyboard: boolean;
}

type TProduto = { name: string; price: number; keyboard: boolean };

function fillData(data: IProduto) {
  document.body.innerHTML += `
  <div>
    <h1>${data.name}</h1>
    <p>${data.price}</p>
    <p>${data.keyboard}</p>
  </div>`;
}

const computador: IProduto = {
  keyboard: false,
  price: 500,
  name: "Computador 5",
};

fillData(computador);

fillData({
  name: "Computador 2",
  price: 2500.9,
  keyboard: true,
});

type Categories = "design" | "código" | "descod";

function printCategory(category: Categories) {
  console.log(category);

  if (category === "design") console.log("Pintar quadrado");
  else if (category === "código") console.log("alinhar div");
}

printCategory("design");
