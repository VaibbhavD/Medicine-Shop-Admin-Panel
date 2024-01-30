import React from "react";
import Form from "./Form";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <Form enable={props.enableshow} />
    </div>
  );
};
export default Header;
