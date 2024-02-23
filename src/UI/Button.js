import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={classes.Button}
      // {...props.className}
      {...props}
    >
      {props.children}
    </button>
  );
};
export default Button;
