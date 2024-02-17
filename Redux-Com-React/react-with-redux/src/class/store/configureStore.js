import { combineReducers, configureStore } from "@reduxjs/toolkit";
import count from "./count";
import modal from "./modal";
import login from "./login";
import localStorage from "./middleware/localStorage";

const reducer = combineReducers({ count, modal, login });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorage), //.concat(logger),
});

export default store;
