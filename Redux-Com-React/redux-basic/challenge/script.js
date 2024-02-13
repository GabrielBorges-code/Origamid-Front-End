import store from "./store/configureStore.js";
import { increaseTime, reduceTime, modifyEmail } from "./store/student.js";
import { completeClass, completeCourse, resetCourse } from "./store/classes.js";

function render() {
  const { student, classes } = store.getState();
  const classesE1 = document.querySelector("#classes");
  const studentsE1 = document.querySelector("#students");

  studentsE1.innerText = `${student.nome} : ${student.email} : ${student.diasRestantes}`;

  classesE1.innerText =
    `Aulas completas: ` + classes.filter((item) => item.completa).length;

  console.log(student, classes);
}

render();

store.subscribe(render);

store.dispatch(increaseTime());
store.dispatch(increaseTime());
store.dispatch(reduceTime());
store.dispatch(modifyEmail("novo@email.com"));
// 
store.dispatch(completeClass(3));
store.dispatch(completeCourse());
store.dispatch(resetCourse());

// Usando o Redux (pode usar Immer ou Não).
// Crie uma store contendo os estados iniciais abaixo
// Crie as seguintes ações:
// aluno/INCREMENTAR_TEMPO, adiciona 1 dia de acesso
// aluno/REDUZIR_TEMPO, reduz 1 dia de acesso
// aluno/MODIFICAR_EMAIL(email), modifica o email do usuário
// aulas/COMPLETAR_AULA(id), completa a aula com base no ID passado
// aulas/COMPLETAR_CURSO, completa todas as aulas
// aulas/RESETAR_CURSO, reseta todas as aulas completas
// Crie constantes e action creators para as ações.
// Crie um reducer para aluno e um para aulas.
// Renderize na tela o nome, email, tempo restante e o total de aulas completas
// Configure a DevTools
