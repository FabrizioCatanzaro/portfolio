import React from 'react'
import './Intro.css'
import 'animate.css'

const Intro = () => {
    return (
        <div className='intro' id='intro'>
            <div className='titlesPageAbout'>
                <div className='titlePage animate__animated animate__slideInLeft animate__slow'>Welcome to <span className='dotColored'>Fabrizio's</span> portfolio<span className='dotColored'>.</span></div>
                <div className='descPage animate__animated animate__slideInUp animate__slow'>Full Stack MERN & Mobile Apps developer</div>
            </div>
            <div className='infoIntroCont'>
                <div className='myPictureCont'>
                    <img src='../my-picture.jpg' className='myPicImg' alt="It's me, Fabri" />
                </div>
                <div className='facts'>
                    <span className='textoIntro12 anim-typewriter12'>22 years old</span>
                    <span className='textoIntro23 anim-typewriter23'>Buenos Aires, Argentina</span>
                </div>
            </div>
        </div>
    )
}

export default Intro