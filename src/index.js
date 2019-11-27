import React from "react";
import ReactDOM from "react-dom";
import Saluda from "./Saluda";
import TextField from "./TextField";
import Calculadora from "./Calculadora";

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
      {/* <Saluda nombre="Sergio" apellido="Ordoñez" />
      <TextField />
      <Container /> */}
      <Calculadora />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
