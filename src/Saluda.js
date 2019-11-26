import React from "react";

class Saluda extends React.Component {
  render() {
    if (!this.props.nombre && !this.props.apellido) {
      return <p>No Hay Datos</p>;
    }
    return (
      <div>
        <p>{this.props.nombre}</p>
        <p>{this.props.apellido}</p>
      </div>
    );
  }
}

export default Saluda;
