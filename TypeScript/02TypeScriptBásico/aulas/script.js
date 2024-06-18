"use strict";
let total = 20;
total = 30;
function fillData(data) {
    document.body.innerHTML += `
  <div>
    <h1>${data.name}</h1>
    <p>${data.price}</p>
    <p>${data.keyboard}</p>
  </div>`;
}
const computador = {
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
function printCategory(category) {
    console.log(category);
    if (category === "design")
        console.log("Pintar quadrado");
    else if (category === "código")
        console.log("alinhar div");
}
printCategory("design");
