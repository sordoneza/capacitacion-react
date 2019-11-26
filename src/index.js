import React from "react";
import ReactDOM from "react-dom";
import Saluda from "./Saluda";
import TextField from "./TextField";

import "./styles.css";

/* const Parrafo = () => <p>soy el contenido</p>;

const Container = () => (
  <div style={{ color: "red" }}>
    <Parrafo />
  </div>
);
 */
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Saluda nombre="Sergio" apellido="Ordoñez" />
      <TextField />
      {/* <Container /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
