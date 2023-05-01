import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* WRAPPED IN THE PROVIDER  SO THAT STORE IS ACCESSIBLE THROUGH APP */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
