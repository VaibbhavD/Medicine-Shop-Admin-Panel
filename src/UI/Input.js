import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.div}>
      <label htmlFor={props.label}>{props.label} - </label>
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
