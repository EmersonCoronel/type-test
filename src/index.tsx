export { default as TypeTest } from './TypeTest';

import React from "react";
import ReactDOM from "react-dom/client";
import TypeTest from "./TypeTest";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <TypeTest />
    </React.StrictMode>,
  );
}
