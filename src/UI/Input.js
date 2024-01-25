import React from "react";

const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type={props.tyep}
        placeholder={props.placeholder}
        value={props.value}
        {...props}
      />
    </div>
  );
};
export default Input;
