export { default as TypeTest } from '../src/TypeTest';

import React from "react";
import ReactDOM from "react-dom/client";
import TypeTest from "../src/TypeTest";
import "./styles.css"

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <TypeTest />
    </React.StrictMode>,
  );
}
