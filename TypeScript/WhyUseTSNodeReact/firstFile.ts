// tipagem forte => definir explicitamente o tipo de cada dado em nosso sistema (Java, C#, C)

// PHP, JS => tipagem dinâmica vs tipagem estática vs tipagem em runtime

type Usuario = {
  nome: string;
  anoQueNasceu: number;
};

function calcularIdadeUsuario(usuario: Usuario) {
  if (usuario.anoQueNasceu >= 2024) {
    return "Ano inválido.";
  }

  return 2024 - usuario.anoQueNasceu;
}

// calcularIdadeUsuario({ nome: "Jovem" }); // erro de tipo

calcularIdadeUsuario({ anoQueNasceu: 1998, nome: "Gabriel" });

// não é necessário informar todos os tipos de dados,
// pois existe a inferência de tipo.

// a função inferiu que o retorno é um numero ou uma string.
const idade = calcularIdadeUsuario({ anoQueNasceu: 1998, nome: "Gabriel" });

console.log(idade);
