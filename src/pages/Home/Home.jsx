import React from 'react'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
import Intro from '../Intro/Intro'
import Contact from '../Contact/Contact'

export default function Home() {

    return (
        <div>
            <Intro />
            <AboutMe/>
            <Projects />
            <Contact />
        </div>
    )
}
