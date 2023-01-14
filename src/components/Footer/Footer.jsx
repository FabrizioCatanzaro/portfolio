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
          <li><img src='https://cdn-icons-png.flaticon.com/512/1051/1051326.png' alt='Github' />/FabrizioCatanzaro</li>
          <li><img src='https://cdn-icons-png.flaticon.com/512/1384/1384014.png' alt='Linkedin' />Luciano Fabrizio Catanzaro Pfahler</li>
          <li><img src='https://cdn-icons-png.flaticon.com/512/3670/3670274.png' alt='Instagram' />@fabrycatanzaro</li>
          <li><img src='https://cdn-icons-png.flaticon.com/512/455/455705.png' alt='Celular' />+54 11 2503 1107</li>
          <li><img src='https://cdn-icons-png.flaticon.com/512/3178/3178158.png' alt='Correo electrónico' />fabriziocatanzaro1@gmail.com</li>
          <li><img src='https://cdn-icons-png.flaticon.com/512/4296/4296521.png' alt='Locación' />Buenos Aires, Argentina</li>
        </ul>
      </div>
      <div className='logoFooterDerechaCont'>
        <img src='./logo-lfcp.png' alt='nombre completo' className='logoFooterDerecha' />
      </div>
    </div>
  )
}

export default Footer