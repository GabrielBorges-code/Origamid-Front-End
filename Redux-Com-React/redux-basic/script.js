const initialState = 10;

const types = {
  SUM: "sum",
  INCREMENT: "increment",
};

function reducer(state = initialState, action) {
  //  console.log(action);

  switch (action.type) {
    case types.SUM:
      return state + action.payload;

    case types.INCREMENT:
      return state + 1;

    default:
      return state;
  }
}

const store = Redux.createStore(reducer);
console.log(store);

let state = store.getState();
console.log(state);
store.dispatch({ type: types.SUM, payload: 1 });
store.dispatch({ type: types.INCREMENT });
store.dispatch({ type: types.INCREMENT });
state = store.getState();
console.log(state);
