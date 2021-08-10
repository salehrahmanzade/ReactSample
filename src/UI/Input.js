import React from "react";

import "../style/input.css";

const Input = (props) => {
  let inputElement = null;
  const inputClass = ["inputtxt"];

  if (props.invalid && props.used) {
    inputClass.push("invalid");
  }

  switch (props.inputtype) {
    case "input":
      inputElement = (
        <input
          className={inputClass.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.change}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClass.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.change}
        />
      );
  }

  return <div> {inputElement} </div> ;
};

export default Input;
