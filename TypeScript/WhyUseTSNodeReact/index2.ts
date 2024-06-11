type Video = {
  title: string;
  duration: number;
};

// Generics, variavel interna para uso do TS
function pickProperty2<T extends Record<string, unknown>>(
  obj: T,
  property: keyof T
) {
  return obj[property];
}

const video2: Video = {
  title: "TypeScript",
  duration: 190,
};

// pickProperty2("lala", "bold"); gera um erro porque o primeiro parametro é uma string

pickProperty2(video2, "duration");
pickProperty2({ name: "joelma", address: "rua dos bobos", number: 0 }, "name");
