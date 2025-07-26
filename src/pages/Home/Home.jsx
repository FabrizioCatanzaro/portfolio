import React from 'react'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
import Intro from '../Intro/Intro'
import Contact from '../Contact/Contact'
import { Toaster } from 'react-hot-toast'

export default function Home() {

    return (
        <div>
            <Toaster />
            <Intro />
            <AboutMe/>
            <Projects />
            <Contact />
        </div>
    )
}
