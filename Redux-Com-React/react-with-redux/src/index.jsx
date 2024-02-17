import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
import App from "./challengers01/App";
// import store from "./challengers01/store/configureStore";
// import App from "./class/App.jsx";
// import store from "./class/store/configureStore.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>
);
