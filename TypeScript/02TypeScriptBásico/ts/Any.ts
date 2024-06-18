// passando any no parâmetro da função
function normalize(text: string) {
  return text.trim().toLowerCase();
}

console.log(normalize("Front-end")); // funciona
// console.log(normalize(123)); // da erro na hora da execução da função (runtime)

// Em alguns casos o any faz sentido, como no caso da função json() onde qualquer tipo de dado pode ser retornado, dependendo da API que acessarmos.
async function fetchJSON(url: string) {
  const response = await fetch(url);
  const data = await response.json();

  manipularData(data);
  // return data;
}

fetchJSON("https://api.origamid.dev/json/cursos.json");

function manipularData(data: { nome: string }) {
  console.log(data.nome); // a api retorna um array, então o valor de retorno é undefined
}

// *********************************

interface Curso {
  nome: string;
  horas: number;
}

function mostrarCursos(cursos: Curso[]) {
  cursos.forEach((curso) => {
    document.body.innerHTML += `
      <div>
        <h2>${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
      </div>
    `;
  });
}

const dados: any = "o any gera problemas";

mostrarCursos(dados);
