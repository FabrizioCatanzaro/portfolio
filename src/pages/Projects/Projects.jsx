import React from 'react'
import './Projects.css'
import EachProject from '../../components/EachProject/EachProject'
import listOfProjects from '../../listOfProjects'

const Projects = () => {

  
  let allProjects = listOfProjects.map(e => e)
  // console.log(allProjects);

  return (
    <section className='projects' id='projects'>
        <h2 className='titlePageProjects'>Projects I've been <span className='dotColored'>working</span> on<span className='dotColored'>.</span></h2>
        <div className='projectsCont'>
          {allProjects?.map( each => 
            <EachProject key={each} name={each.name} techs={each.technologies} image={each.image} date={each.date} deploy={each.deploy} repo={each.repo} />
          )}
        </div>
    </section>
  )
}

export default Projects