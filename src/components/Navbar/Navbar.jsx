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
    <section className={colorNav}>
      <div className="logoCont">
        <a href="#"><img src="./assets/img/logo-lfcp.png" alt="Logo" className="logo" /></a>
      </div>
      <div className="pagesNavCont">
        <p><Link smooth to='#about-me' id="linkNav">Skills</Link></p>
        <p><Link smooth to='#projects' id="linkNav">Projects</Link></p>
        <p><Link smooth to='#contact' id="linkNav">Contact</Link></p>
      </div>
      <div className="pagesNavContResponsive">
        <Link smooth to='#about-me' id="linkNav"><i class='bx bxs-terminal'></i></Link>
        <Link smooth to='#projects' id="linkNav"><i class='bx bxs-briefcase' ></i></Link>
        <Link smooth to='#contact' id="linkNav"><i class='bx bxs-comment-dots' ></i></Link>
      </div>
    </section>
  );
};

export default Navbar;
