const INCREMENT = "count/INCREMENT";
const REDUCE = "count/REDUCE";

export const increment = () => {
  return { type: INCREMENT };
};

export const reduce = () => {
  return { type: REDUCE };
};

const initialState = 0;

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case REDUCE:
      return state - 1;
    default:
      return state;
  }
};

export default countReducer;
