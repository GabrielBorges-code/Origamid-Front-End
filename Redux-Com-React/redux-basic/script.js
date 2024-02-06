const initialState = 0;

const actionTypes = {
  SUM: "SUM",
  INCREMENT: "INCREMENT",
  OPEN: "OPEN",
  CLOSE: "CLOSE",
};

function increment() {
  return { type: actionTypes.INCREMENT };
}

function sum(payload) {
  return { type: actionTypes.SUM, payload: payload };
}

function openModal() {
  return { type: actionTypes.OPEN, payload: true };
}

function closeModal() {
  return { type: actionTypes.CLOSE, payload: false };
}

function counter(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SUM:
      return state + action.payload;

    case actionTypes.INCREMENT:
      return state + 1;

    default:
      return state;
  }
}

function modal(state = false, action) {
  switch (action.type) {
    case actionTypes.OPEN:
      return true;

    case actionTypes.CLOSE:
      return false;

    default:
      return state;
  }
}

const reducer = Redux.combineReducers({ counter, modal });

const store = Redux.createStore(reducer);
let state = store.getState();

console.log(store);
console.log("valor inicial", state);

store.dispatch(sum(2));
store.dispatch(increment());

state = store.getState();

const button = document.querySelector("#btn-increment");
const btnModalOpen = document.querySelector("#btn-modal-open");
const btnModalClose = document.querySelector("#btn-modal-close");

button.addEventListener("click", () => store.dispatch(increment()));
btnModalOpen.addEventListener("click", () => store.dispatch(openModal()));
btnModalClose.addEventListener("click", () => store.dispatch(closeModal()));

function render() {
  const state = store.getState();
  const total = document.querySelector("#total");
  total.innerText = state.counter;

  if (state.modal) {
    total.style.display = "inline-block";
  } else {
    total.style.display = "none";
  }
}

render();

const unsubscribe = store.subscribe(render);

console.log("após dispatch", state);
