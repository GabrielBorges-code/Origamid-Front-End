import { combineReducers, configureStore } from "@reduxjs/toolkit";
import count from "./count";
import modal from "./modal";
import logger from "./middleware/logger";

const reducer = combineReducers({ count, modal });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
