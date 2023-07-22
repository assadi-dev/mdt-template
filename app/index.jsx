import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App";
import "./bootstrap";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
