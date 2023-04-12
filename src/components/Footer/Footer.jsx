import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='logoFooterCont'>
        <img src='./nombrecompleto-lfcp.png' alt='nombre completo' className='logoFooter' />
      </div>
      <div className='datosFooter'>
        <ul>
          <li><a href='https://github.com/FabrizioCatanzaro' target='_blank' rel='noreferrer' ><img src='https://cdn-icons-png.flaticon.com/512/1051/1051326.png' alt='Github' />/FabrizioCatanzaro</a></li>
          <li><a href='https://www.linkedin.com/in/luciano-fabrizio-catanzaro-pfahler/' target='_blank' rel='noreferrer'><img src='https://cdn-icons-png.flaticon.com/512/1384/1384014.png' alt='Linkedin' />Luciano Fabrizio Catanzaro Pfahler</a></li>
          <li><a href='https://www.instagram.com/fabrycatanzaro' target='_blank' rel='noreferrer'> <img src='https://cdn-icons-png.flaticon.com/512/3670/3670274.png' alt='Instagram' />@fabrycatanzaro</a></li>
          <li><a href='https://wa.me/5491125031107' target='_blank' rel='noreferrer' ><img src='https://cdn-icons-png.flaticon.com/512/455/455705.png' alt='Celular' />+54 11 2503 1107</a></li>
          <li><a href='mailto:fabriziocatanzaro1@gmail.com' target='_blank' rel='noreferrer'><img src='https://cdn-icons-png.flaticon.com/512/3178/3178158.png' alt='Correo electrónico' />fabriziocatanzaro1@gmail.com</a></li>
          <li><a href='https://goo.gl/maps/iNtTN9y8TUE8rSFP6' target='_blank' rel='noreferrer'><img src='https://cdn-icons-png.flaticon.com/512/4296/4296521.png' alt='Locación' />Buenos Aires, Argentina</a></li>
        </ul>
      </div>
      <div className='logoFooterDerechaCont'>
        <img src='./logo-lfcp.png' alt='nombre completo' className='logoFooterDerecha' />
      </div>
    </div>
  )
}

export default Footer