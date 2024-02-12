const array1 = [0, 1, 2, 3, 4];
const array2 = array1.filter((item) => item > 2);
array1.pop();

const obj1 = {
  name: "Gabriel B",
  age: 25,
};

const obj2 = immer.produce(obj1, (draft) => {
  draft.age = 30;
});

function changeAge(obj, age) {
  obj.age = age;
  return obj;
}

const initialState = {
  name: "Gabriel B",
  age: 25,
};

const actionTypes = {
  CHANGE_NAME: "changeName",
  CHANGE_AGE: "changeAge",
};

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_NAME:
      state.name = action.payload;
      break;
    case actionTypes.CHANGE_AGE:
      state.age = action.payload;
      break;
  }
}, initialState);

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({ type: actionTypes.CHANGE_NAME, payload: "Maria" });
store.dispatch({ type: actionTypes.CHANGE_NAME, payload: "João" });
store.dispatch({ type: actionTypes.CHANGE_AGE, payload: 123 });
store.dispatch({ type: actionTypes.CHANGE_NAME, payload: "Pedro" });
store.dispatch({ type: "TESTE", payload: "Pedro" });

