import React from "react";
import {Link } from "react-router-dom";

import "../../../style/Navitem.css";

const Navitem = (props) => {
  return (
    <li className="nav-item">
      <Link to={props.link}>{props.children}</Link>
    </li>
  );
};

export default Navitem;
