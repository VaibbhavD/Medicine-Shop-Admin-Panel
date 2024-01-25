import React from "react";
import Form from "./Form";
import Button from "../../UI/Button";
import classes from "./Header.module.css";

const Header = (props) => {
  const enable = () => {
    props.enableshow();
  };

  return (
    <div className={classes.header}>
      <Form />
      <Button onClick={enable}>Cart</Button>
    </div>
  );
};
export default Header;
