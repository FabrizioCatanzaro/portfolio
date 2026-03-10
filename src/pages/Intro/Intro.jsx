import React, { useState } from 'react'
import './Intro.css'
import 'animate.css'

const Intro = () => {
    let [cvCont, setCvCont] = useState('closedCont')

    const openCvCont = () => {
        cvCont === 'closedCont' ? setCvCont('openCont') : setCvCont('closedCont')
    }

    function calcularEdad(fechaNacimiento) {
        // Convertimos la fecha de nacimiento a un objeto Date
        let nacimiento = new Date(fechaNacimiento);
    
        // Obtenemos la fecha actual
        let ahora = new Date();
    
        // Calculamos la diferencia en años
        let edad = ahora.getFullYear() - nacimiento.getFullYear();
    
        // Ajustamos si aún no cumpliste años este año
        //console.log("ahora -->", ahora);
        //console.log("nacimiento -->", nacimiento);
        
        let yaCumplio = 
            ahora.getMonth() > nacimiento.getMonth() || 
            (ahora.getMonth() === nacimiento.getMonth() && ahora.getDate() > nacimiento.getDate());
    
        // Si no cumplió, restamos un año
        if (!yaCumplio) {
            edad--;
        }
    
        return edad;
    }

    let edadActual = calcularEdad("2000-07-11")

    let cvEspanol = 'https://drive.google.com/file/d/12jWbEzdGpHvRhGFsluK4aUUNZv_FTwtm/view?usp=sharing'
    let cvIngles = 'https://drive.google.com/file/d/1z9tV7RU3MgUVBQE5rvfld4uLDipuzJup/view?usp=sharing'

    return (
        <div className='intro' id='intro'>
            <div className='titlesPageAbout'>
                <div className='titlePage animate__animated animate__slideInLeft animate__slow'>Welcome to <span className='dotColored'>Fabrizio's</span> portfolio<span className='dotColored'>.</span></div>
                <div className='descPage animate__animated animate__slideInUp animate__slow'>Full Stack MERN developer</div>
            </div>
            <div className='infoIntroCont'>
                <div className='myPictureCont'>
                    <img src='./assets/img/profile-pic.jpg' className='myPicImg' alt="It's me, Fabri" />
                </div>
                <div className='facts'>
                    <span className='textIntro anim-typewriter23'>Luciano Fabrizio Catanzaro Pfahler</span>
                    <span className='textIntro anim-typewriter12'>{edadActual} years old</span>
                    <span className='textIntro anim-typewriter23'>Buenos Aires, Argentina</span>
                    <span onClick={() => openCvCont()} className='btnIntro anim-typewriter23'>{ cvCont === 'closedCont' ? 'Download CV' : `Hide options`}</span>
                    <div className={cvCont}>
                        <a download='CV Fabrizio Catanzaro' href={cvIngles} target='_BLANK' rel='noreferrer' id='linkCv'>English CV</a>
                        <a download='CV Fabrizio Catanzaro' href={cvEspanol} target='_BLANK' rel='noreferrer' id='linkCv'>Spanish CV</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro