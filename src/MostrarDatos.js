import React from "react";

function MostrarDatos(props) {
  const { nombre, apellido, edad, sexo, casado } = props;
  return (
    <div style = {{ border: "1px solid red"}}>
      Nombre: {nombre} <br />
      Apellido: {apellido}
      <br />
      Edad: {edad} <br />
      Sexo: {sexo}
      <br />
      {casado ? "Casado" : "Soltero"}
      <br />
    </div>
  );
}

export default MostrarDatos;
