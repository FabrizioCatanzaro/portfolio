import React, { useState } from 'react'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
import Intro from '../Intro/Intro'

export default function Home() {

    return (
        <div>
            <Intro />
            <AboutMe/>
            <Projects />
        </div>
    )
}
