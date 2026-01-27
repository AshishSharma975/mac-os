import React from "react";
import "./nav.scss";
import DateTime from "./DateTime";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <img className="apple" src="/navbar-icons/apple.svg" alt="apple" />

        <span className="nav-item active">Ashish Sharma</span>
        <span className="nav-item">File</span>
        <span className="nav-item">Window</span>
        <span className="nav-item">Terminal</span>
      </div>

      <div className="right">
        <img className="icon" src="/navbar-icons/wifi.svg" alt="wifi" />
        <DateTime />
      </div>
    </nav>
  );
};

export default Nav;
