import React from 'react'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
import Intro from '../Intro/Intro'
import Contact from '../Contact/Contact'
import { Toaster } from 'react-hot-toast'
import Profile from '../Profile/Profile'

export default function Home() {

    return (
        <div>
            <Toaster />
            <Intro />
            <Profile />
            <AboutMe/>
            <Projects />
            <Contact />
        </div>
    )
}
