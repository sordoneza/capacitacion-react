import React from "react";

class Calculadora extends React.Component {
  state = {
    num1: 0,
    num2: 0,
    resultado: 0
  };

  onChangeNum = field => {
    return e => this.setState({ [field]: e.target.value });
  };

  onChangeNum2 = e => {
    this.setState({ num2: e.target.value });
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
          <input onChange={this.onChangeNum("num1")} />
        </div>
        <div className="segundo-valor">
          Segundo Valor
          <input onChange={this.onChangeNum("num2")} />
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
