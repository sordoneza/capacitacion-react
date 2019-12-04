import React from "react";

class TextField extends React.Component {
  componentDidMount() {
    // console.log("componentDidMount");
  }

  componentDidUpdate() {
    //console.log("componentDidUpdate");
  }

  render() {
    let type = "text";
  
    if (this.props.type) {
      type = this.props.type;
    }
    const {nombre, onChange, value } = this.props;
    //console.log(state);

    return (
      <div>
        <input type={type} name={nombre} placeholder={nombre.substr(0,1).toUpperCase() + nombre.substr(1)} onChange={onChange} value = {value} />
      </div>
    );
  }
}

export default TextField;
