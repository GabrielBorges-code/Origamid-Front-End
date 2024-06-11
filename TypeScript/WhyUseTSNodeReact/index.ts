type Address = {
  street: string;
  number: number;
};

type User = {
  name?: string; // ? define se um valor é obrigatório.
  age: number;
  address: Address;
};

const user: User = {
  age: 26,
  name: "Gabriel",
  address: {
    street: "Rua dos Bobos",
    number: 0,
  },
};

// diferença de type e interface.
// O type não pode ser implementado por uma classe.
// a inferface pode externder outras interfaces e não pode extender interface.
// em 99% dos casos não faz diferença.

type UserProperties = keyof User; // retorna todas as chaves de um objeto

function pickProperty(user: User, property: UserProperties) {
  return user[property];
}

const video = {
  title: "Usando TS",
  duration: 160,
};

const Video = typeof video;

console.log(pickProperty(user, "age"));

// Utility types

type PickPropertyReturnType = ReturnType<typeof pickProperty>;

type UserWithoutAddress = Omit<User, "address" | "age">; // omito os dados de address e age, retornando apenas o name

type UserNameAndAge = Pick<User, "name" | "age">; // defino os dados de retorno, somente name e age.

type UserPartial = Partial<User>; // define que todos os valores são opcionais '?'

// -----------

type DbConfig = {
  url: string;
  name: string;
};

const conn1 = {
  name: "postgress",
  url: "postgres://user:password",
} as DbConfig; // as, força a tipagem, mesmo não havendo objeto. Geralmente não é bom usar

const conn2: DbConfig = { name: "mysql", url: "mysql://user:password" }; // precisa contemplar todas as informações, faz com que o ts não seja dinâmico.

const conn3 = {
  name: "sqlite",
  url: "sqlite://user:password",
} satisfies DbConfig; // ele une as validações do as e do : type. faz a junção dos tipos.


