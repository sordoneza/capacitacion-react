import React from "react";
import TextField from "./TextField";

class Calculadora extends React.Component {
  state = {
    num1: 0,
    num2: 0,
    resultado: 0
  };

  onChangeNum = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  sumar = () => {
    const valor1 = this.state.num1;
    const valor2 = this.state.num2;
    this.setState({ resultado: parseInt(valor1) + parseInt(valor2) });
  };

  restar = () => {
    const valor1 = this.state.num1;
    const valor2 = this.state.num2;
    this.setState({ resultado: parseInt(valor1) - parseInt(valor2) });
  };

  multiplicar = () => {
    const valor1 = this.state.num1;
    const valor2 = this.state.num2;
    this.setState({ resultado: parseInt(valor1) * parseInt(valor2) });
  };

  dividir = () => {
    const valor1 = this.state.num1;
    const valor2 = this.state.num2;
    this.setState({ resultado: parseInt(valor1) / parseInt(valor2) });
  };

  render() {
    return (
      <div>
        <div className="primer-valor">
          Primer Valor
          <TextField
            state={this.state}
            nombre="num1"
            onChange={this.onChangeNum}
          />
        </div>
        <div className="segundo-valor">
          Segundo Valor
          <TextField
            state={this.state}
            nombre="num2"
            onChange={this.onChangeNum}
          />
        </div>
        <div className="acciones">
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
          <button onClick={this.multiplicar}>*</button>
          <button onClick={this.dividir}> /</button>
        </div>
        <div className="resultado">{this.state.resultado}</div>
      </div>
    );
  }
}

export default Calculadora;
