import React, { useEffect, useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  let navbar = document.getElementsByClassName('navbar')
  let navbar2 = document.getElementsByClassName('move')
  let positionNav = navbar?.[0]?.offsetTop
  let [colorNav, setColorNav] = useState('navbar')
  // let colorNav = 'navbar'
  console.log(positionNav)
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > positionNav){
        setColorNav('move')
      } else {
        setColorNav('navbar')
      }
    }
  }, [])

  return (
    <div className={colorNav}>
      <div className="logoCont">
        <img src="./logo-lfcp.png" alt="Logo" className="logo" />
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
