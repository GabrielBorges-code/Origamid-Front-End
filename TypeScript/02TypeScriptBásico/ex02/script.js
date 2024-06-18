"use strict";
const url = "https://api.origamid.dev/json/notebook.json";
async function fetchProduct() {
    const response = await fetch(url);
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML += `
    <div>
      <h1>nome: ${data.nome}</h1>
      <p>preco: ${data.preco}</p>
      <p>descricao: ${data.descricao}</p>
      <p>garantia: ${data.garantia}</p>
      <p>seguroAcidentes: ${data.seguroAcidentes}</p>
      <p>empresaFabricante.pais: ${data.empresaFabricante.pais}</p>
      <p>empresaFabricante.fundacao: ${data.empresaFabricante.fundacao}</p>
      <p>empresaFabricante.nome: ${data.empresaFabricante.nome}</p>
      <p>empresaMontadora.pais: ${data.empresaMontadora.pais}</p>
      <p>empresaMontadora.fundacao: ${data.empresaMontadora.fundacao}</p>
      <p>empresaMontadora.nome: ${data.empresaMontadora.nome}</p>
    </div>
  `;
}
