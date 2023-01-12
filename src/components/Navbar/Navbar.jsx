import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logoCont">
        <img src="" alt="Logo" className="logo" />
      </div>
      <div className="seccionesNavCont">
        <p>My projects</p>
        <p>About me</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
