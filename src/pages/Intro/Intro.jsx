import React, { useState } from 'react'
import './Intro.css'
import 'animate.css'

const Intro = () => {
    let [cvCont, setCvCont] = useState('closedCont')

    const openCvCont = () => {
        cvCont === 'closedCont' ? setCvCont('openCont') : setCvCont('closedCont')
    }

    return (
        <div className='intro' id='intro'>
            <div className='titlesPageAbout'>
                <div className='titlePage animate__animated animate__slideInLeft animate__slow'>Welcome to <span className='dotColored'>Fabrizio's</span> portfolio<span className='dotColored'>.</span></div>
                <div className='descPage animate__animated animate__slideInUp animate__slow'>Full Stack MERN & Mobile Apps developer</div>
            </div>
            <div className='infoIntroCont'>
                <div className='myPictureCont'>
                    <img src='./assets/img/my-picture.jpg' className='myPicImg' alt="It's me, Fabri" />
                </div>
                <div className='facts'>
                    <span className='textIntro anim-typewriter12'>22 years old</span>
                    <span className='textIntro anim-typewriter23'>Buenos Aires, Argentina</span>
                    <span onClick={() => openCvCont()} className='btnIntro anim-typewriter23'>{ cvCont === 'closedCont' ? 'Download CV' : 'Close Window'}</span>
                    <div className={cvCont}>
                        <a download='CV Fabrizio Catanzaro' href='./assets/docs/Fabrizio_Catanzaro-Web_Developer.pdf' id='linkCv'>English CV</a>
                        <a download='CV Fabrizio Catanzaro' href='./assets/docs/Fabrizio_Catanzaro-Desarrollador_Web.pdf' id='linkCv'>Spanish CV</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro