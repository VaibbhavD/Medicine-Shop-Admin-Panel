import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};
const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portal = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portal)}
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        portal
      )}
    </>
  );
};
export default Modal;
