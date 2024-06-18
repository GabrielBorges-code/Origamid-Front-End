"use strict";
// Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.
// Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.
const url = "https://api.origamid.dev/json/cursos.json";
async function fetchCursos() {
    const response = await fetch(url);
    const data = await response.json();
    mostrarCursos(data);
}
fetchCursos();
function verificaNivel(nivel) {
    if (nivel === "avancado")
        return "red";
    else if (nivel === "iniciante")
        return "blue";
}
function mostrarCursos(cursos) {
    cursos.map((curso) => (document.body.innerHTML += `
        <div>
          <h1 style="background: ${verificaNivel(curso.nivel)}">
            ${curso.nome}
          </h1>
          <p>${curso.gratuito ? "gratuito" : "pago"}</p>
          <p style="border: solid 1px black; padding: 4px">
            ${curso.tags.join(", ")}
          </p>
        </div>
    `));
}
