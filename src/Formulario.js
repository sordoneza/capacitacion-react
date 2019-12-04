import React from "react";
import TextField from "./TextField";

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellido: "",
      edad: 18,
      sexo: "Masculino",
      casado: false,
      error: false
    };
  }

  handleChange = event => {
    const name = event.target.name;
    let value = event.target.value;

    if (name === "casado") {
      value = event.target.checked;
    }

    console.log(value);

    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();

    const {nombre, apellido, edad} = this.state;

    if (nombre.length > 0 && apellido.length > 0 && edad > 0)  {
      this.setState({error: false});
      this.props.enviarDatos(this.state);
    } else {
      this.setState({error: true});
    }
  }

  render() {
    const { nombre, apellido, edad, sexo, error } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <TextField nombre="nombre" onChange={this.handleChange} value = {nombre}/>
          <TextField nombre="apellido" onChange={this.handleChange} value = {apellido}/>
          <TextField type="number" nombre="edad" onChange={this.handleChange}  />
          <label>
            Masculino
            <input
              type="radio"
              name="sexo"
              value="Masculino"
              checked={sexo === "Masculino"}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Femenino
            <input
              type="radio"
              name="sexo"
              value="Femenino"
              checked={sexo === "Femenino"}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Casado
            <input type="checkbox" name="casado" onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Enviar" />
          <br/>          
        </form>
         <p style= {{color: "red"}} >{error && "Debe Completar todos los campos" }</p>
      </div>
    );
  }
}

export default Formulario;
