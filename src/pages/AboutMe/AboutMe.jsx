import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='aboutMe' id='about-me'>
            <div className='titlePage'>Welcome to <span className='dotColored'>Fabrizio's</span> portfolio<span className='dotColored'>.</span></div>
            <div className='descPage'>Full Stack MERN & Mobile Apps developer</div>
            <div>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>Redux Toolkit</li>
                    <li>NodeJS</li>
                    <li>React Native</li>
                    <li>Bootstrap</li>
                    <li>Postman</li>
                    <li>Git</li>
                    <li>GitHub</li>
                </ul>
            </div>
        </div>
    )
}

export default AboutMe