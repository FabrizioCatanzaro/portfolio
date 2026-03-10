import React from 'react'
import './Profile.css'
import 'animate.css'
import CardAboutMe from '../../components/CardAboutMe/CardAboutMe'
import { CodeXml } from 'lucide-react'

// filepath: c:\Users\Fabry\Programacion\portfolio\src\pages\Profile\Profile.jsx

const Profile = () => {
    return (
        <div className='profile' id='profile'>
            <h2 className='titlePageProfile'>About <span className='dotColored'>me</span>.</h2>
            
            <div className='profileContainer animate__animated animate__slideInUp animate__slow'>
                <div className='profileCard'>
                    <h3 className='cardTitle'>What do I do?</h3>
                    <p className='cardDescription'>
                        I'm a Full Stack Developer passionate about creating innovative web and mobile solutions. 
                        I specialize in building scalable applications using modern technologies and best practices.
                    </p>
                </div>

                <div className='profileCard'>
                    <h3 className='cardTitle'>Usual Responsibilities</h3>
                    <div className='cardList'>
                        {/* <CardAboutMe description="Backend development with Node.js and Express" icon={CodeXml}/> */}
                        <li>Backend development with Node.js and Express</li>
                        <li>Frontend development with React and React Native</li>
                        <li>Database design and management (MongoDB, SQL)</li>
                        <li>API development and integration</li>
                        <li>Code review and testing</li>
                    </div>
                </div>

                <div className='profileCard'>
                    <h3 className='cardTitle'>Work Modality</h3>
                    <p className='cardDescription'>
                        I'm flexible with work arrangements. I adapt to both remote and on-site environments, 
                        working efficiently in agile teams and maintaining clear communication with stakeholders.
                    </p>
                </div>

                <div className='profileCard'>
                    <h3 className='cardTitle'>Project Types</h3>
                    <ul className='cardList'>
                        <li>E-commerce platforms</li>
                        <li>SaaS applications</li>
                        <li>Mobile applications</li>
                        <li>Real-time systems</li>
                        <li>Data management solutions</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile