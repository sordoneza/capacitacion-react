import React from "react";
import ReactDOM from "react-dom";
import Saluda from "./Saluda";
import TextField from "./TextField";
import Calculadora from "./Calculadora";
import Formulario from "./Formulario";
import MostrarDatos from "./MostrarDatos";

import "./styles.css";

/* const Parrafo = () => <p>soy el contenido</p>;

const Container = () => (
  <div style={{ color: "red" }}>
    <Parrafo />
  </div>
);
 */
class App extends React.Component {
  state = {
    nombre: "",
    apellido: "",
    edad: 18,
    sexo: "Masculino",
    casado: false,
    mostrar: false
  };

  onClick = () => this.setState(state => ({ mostrar: !state.mostrar }));

  enviarDatos = datos => this.setState({ ...datos });

  render() {
    const { mostrar } = this.state;
    console.log(this.state);
    return (
      <div className="App">
        {/* <Saluda nombre="Sergio" apellido="Ordoñez" />
      <TextField />
      <Container /> */}
        {/* {mostrar && <Calculadora />}
        <button onClick={this.onClick}>
          {mostrar ? "Ocultar" : "Mostrar"}
        </button> */}
        <Formulario enviarDatos = {this.enviarDatos} />
        <MostrarDatos {...this.state} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
