import React, { useEffect, useState } from "react";
import './Navbar.css'
import { HashLink as Link } from "react-router-hash-link";


const Navbar = () => {
  let [colorNav, setColorNav] = useState('navbar')

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
        <a href="#"><img src="./assets/img/logo-lfcp.png" alt="Logo" className="logo" /></a>
      </div>
      <div className="seccionesNavCont">
        <p><Link smooth to='#about-me' id="linkNav">Skills</Link></p>
        <p><Link smooth to='#projects' id="linkNav">Projects</Link></p>
        <p><Link smooth to='#contact' id="linkNav">Contact</Link></p>
      </div>
      <div className="seccionesNavResponsive">
        <Link smooth to='#about-me' id="linkNav"><i className='bx bxs-terminal'></i></Link>
        <Link smooth to='#projects' id="linkNav"><i className='bx bxs-briefcase' ></i></Link>
        <Link smooth to='#contact' id="linkNav"><i className='bx bxs-comment-dots' ></i></Link>
      </div>
    </div>
  );
};

export default Navbar;
