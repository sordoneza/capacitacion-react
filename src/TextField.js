import React from "react";
import PropTypes from "prop-types";

class TextField extends React.Component {
  render() {
    const { state, nombre, onChangeNum } = this.props;
    console.log(state);
    return <input name={nombre} onChange={onChangeNum(nombre)} />;
  }
}

TextField.propTypes = {
  state: PropTypes.object,
  nombre: PropTypes.string,
  onChangeNum: PropTypes.function
};

export default TextField;
