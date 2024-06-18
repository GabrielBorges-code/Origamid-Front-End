// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

// minha solução
function isNumber2(value: string | number) {
  if (typeof value === "number") {
    return value;
  } else if (typeof value === "string") {
    const parseValue = Number(value);

    if (isNaN(parseValue)) {
      throw new Error("value deve ser um número ou uma string.");
    } else {
      return parseValue;
    }
  }
}

// solução gpt
function isNumber3(value: string | number): number {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "string") {
    const parsedValue = Number(value);
    if (!Number.isNaN(parsedValue)) {
      return parsedValue;
    }
  }

  throw new Error(
    "O valor deve ser um número ou uma string que pode ser convertida para número."
  );
}

// console.log(isNumber2("sdfasdf"));

// solução origamid
function isNumberSolution(value: number | string) {
  if (typeof value === "number") {
    return value;
  } else if (typeof value === "string") {
    return Number(value);
  } else {
    throw "Value deve ser um number | string";
  }
}

console.log(isNumberSolution("5x00"));
