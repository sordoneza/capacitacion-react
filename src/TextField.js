import React from "react";

class TextField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "Hola"
    };
  }

  onChange = e => {
    const val = e.target.value;
    this.setState({ value: val });
  };

  render() {
    return <input value={this.state.value} onChange={this.onChange} />;
  }
}

export default TextField;
