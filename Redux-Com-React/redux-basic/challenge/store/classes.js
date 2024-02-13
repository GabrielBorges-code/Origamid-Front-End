const COMPLETE_CLASS = "classes/COMPLETE_CLASS";
const COMPLETE_COURSE = "classes/COMPLETE_COURSE";
const RESET_COURSE = "classes/RESET_COURSE";

export const completeClass = (id) => ({ type: COMPLETE_CLASS, payload: id });
export const completeCourse = () => ({ type: COMPLETE_COURSE });
export const resetCourse = () => ({ type: RESET_COURSE });

const initialState = [
  {
    id: 1,
    nome: "Design",
    completa: true,
  },
  {
    id: 2,
    nome: "HTML",
    completa: false,
  },
  {
    id: 3,
    nome: "CSS",
    completa: false,
  },
  {
    id: 4,
    nome: "JavaScript",
    completa: false,
  },
];

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case COMPLETE_CLASS:
      const index = state.findIndex((item) => item.id === action.payload);
      if (!isNaN(index) && state[index]) {
        state[index].completa = true;
      }
      break;

    case COMPLETE_COURSE:
      state.forEach((item) => (item.completa = true));
      break;

    case RESET_COURSE:
      state.forEach((item) => (item.completa = false));
      break;
  }
}, initialState);

export default reducer;
