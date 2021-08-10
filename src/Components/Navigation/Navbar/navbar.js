import React from "react";

import "../../../style/navbar.css";

import Navitem from "../Navitem/Navitem";

const Navbar = (props) => {
  return (
    <header className="navbar">
      <nav>
        <ul className="nav-items">
          <Navitem link={"/"}>Shopping</Navitem>
          <Navitem link={"/checkout"}>Checkout</Navitem>
          <Navitem link={"/account"}>Account</Navitem>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
