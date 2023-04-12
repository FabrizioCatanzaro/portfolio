import React, { useEffect, useState } from "react";
import './Navbar.css'
import { HashLink as Link } from "react-router-hash-link";


const Navbar = () => {
  let navbar = document.getElementsByClassName('navbar')
  let navbar2 = document.getElementsByClassName('move')
  let positionNav = navbar?.[0]?.offsetTop
  let [colorNav, setColorNav] = useState('navbar')
  // let colorNav = 'navbar'
  // console.log(positionNav)
  useEffect(() => {
    const handleNavbarVisibility = () => {
      window.pageYOffset > 100 ? setColorNav('move') : setColorNav('navbar')
    }

    window.addEventListener('scroll', handleNavbarVisibility)

    return () => {
      window.removeEventListener('scroll', handleNavbarVisibility)
  }
  }, [])

  return (
    <div className={colorNav}>
      <div className="logoCont">
        <a href="#"><img src="./logo-lfcp.png" alt="Logo" className="logo" /></a>
      </div>
      <div className="seccionesNavCont">
        <p><Link smooth to='#projects' id="linkNav">My projects</Link></p>
        <p><Link smooth to='#about-me' id="linkNav">About me</Link></p>
        <p><Link smooth to='#contact' id="linkNav">Contact</Link></p>
      </div>
    </div>
  );
};

export default Navbar;
