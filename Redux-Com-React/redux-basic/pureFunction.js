function reducer(state = 0, action) {
  switch (action.type) {
    case "MODIFY_WIDTH":
      return action.payload;

    default:
      return state;
  }
}

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function render() {
  const box = document.querySelector("#box");
  box.style.width = store.getState() + "px";
}

render();

store.subscribe(render);

store.dispatch({ type: "MODIFY_WIDTH", payload: 100 });
store.dispatch({ type: "MODIFY_WIDTH", payload: 20 });
store.dispatch({ type: "MODIFY_WIDTH", payload: 30 });
store.dispatch({ type: "MODIFY_WIDTH", payload: 200 });

console.log(store.getState());
