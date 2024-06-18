// Union types pode possuir mais de um tipo
let total: string | number = 200;

total = "4000";

function isNumber(value: string | number): boolean {
  if (typeof value === "number") return true;
  else return false;
}

if (isNumber("200")) { // condição falsa.
  console.log("teste teste legal");
  
}

console.log(isNumber("200"));
