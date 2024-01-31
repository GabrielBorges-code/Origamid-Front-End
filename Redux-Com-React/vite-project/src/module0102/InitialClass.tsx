import { configureStore, createSlice } from "@reduxjs/toolkit";

function InitialClass() {
  interface UserState {
    name: string;
    age: number;
  }

  const initialState: UserState = {
    name: "Gabriel",
    age: 25,
  };

  const slice = createSlice({
    name: "user",
    initialState,
    reducers: {
      incremented: (state) => {
        state.age += 1;
      },
      decremented: (state) => {
        state.age -= 1;
      },
      sum: (state, payload) => {
      //  console.log("state", state);
      //  console.log("payload", payload);

        state.age += payload.payload;
      },
    },
  });

  const { incremented, decremented, sum } = slice.actions;

  const store = configureStore({
    reducer: slice.reducer,
  });

  store.dispatch(incremented());
  store.dispatch(incremented());
  store.dispatch(decremented());
  store.dispatch(sum(4));

  function handleClick() {
    store.dispatch(incremented());
  }

  store.subscribe(() => {
    console.log(store.getState().age);
  });

  return (
    <>
      <p>Olá mundo!</p>
      <p>Minha idade é: {store.getState().age}</p>
      <button onClick={handleClick}>incrementar</button>
    </>
  );
}

export default InitialClass;
