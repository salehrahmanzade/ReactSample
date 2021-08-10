import React from "react";

import "../style/Modal.css";

import BackDrop from "./BackDrop";
import Wrapper from "../hoc/Wrapper";

const Modal = (props) => {
  return (
    <Wrapper>
      <BackDrop show={props.show} click={props.modalClose} />

      <div
        className="modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Wrapper>
  );
};

export default Modal;
