const INCREASE_TIME = "student/INCREASE_TIME";
const REDUCE_TIME = "student/REDUCE_TIME";
const MODIFY_EMAIL = "student/MODIFY_EMAIL";

export const increaseTime = () => ({ type: INCREASE_TIME });
export const reduceTime = () => ({ type: REDUCE_TIME });
export const modifyEmail = (email) => ({ type: MODIFY_EMAIL, payload: email });

const initialState = {
  nome: "André Rafael",
  email: "andre@origamid.com",
  diasRestantes: 120,
};

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case INCREASE_TIME:
      state.diasRestantes++;
      break;
    case INCREASE_TIME:
      state.diasRestantes--;
      break;
    case MODIFY_EMAIL:
      state.email = action.payload;
      break;
  }
}, initialState);

export default reducer;
