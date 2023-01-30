import React from 'react'
import './Projects.css'
import EachProject from '../../components/EachProject/EachProject'
import listOfProjects from '../../listOfProjects'

const Projects = () => {

  
  let allProjects = listOfProjects.map(e => e)
  console.log(allProjects);

  return (
    <div className='projects'>
        <h2 className='titlePage'>Projects I've been working on<span className='dotColored'>.</span></h2>

          <div className='eachprojectCont'>
            <div className='firstCont'>
                <div>
                    <p>{allProjects[0].name}</p>
                </div>
                <div className='technologiesProject'>
                    {allProjects[0].technologies.map(eachTech => 
                      <img key={eachTech.name} src={eachTech.image} alt='' className='tecnologies' />
                    )}
                </div>
            </div>
            <div className='secondCont'>
              <p>{allProjects[0].date}</p>
            </div>
            <p className='descriptionProject'>This is my last work done in a group of 7 people. We worked with agile methods such as SCRUM, having daily meetings every morning and retrospective meetings on the afternoon once a week.</p>
          </div>

          <div className='eachprojectCont'>
            <div className='firstCont'>
                <div>
                    <p>{allProjects[1].name}</p>
                </div>
                <div className='technologiesProject'>
                    {allProjects[1].technologies.map(eachTech => 
                      <img key={eachTech.name} src={eachTech.image} alt='' className='tecnologies' />
                    )}
                </div>
            </div>
            <div className='secondCont2'>
              <p>{allProjects[1].date}</p>
            </div>
            <p className='descriptionProject'>This app was made to promote the tourism of some cities previously chosen. In this case the website has been done in pairs, using SCRUM agile methodology and finished in 4 sprints.</p>
          </div>

          <div className='eachprojectCont'>
            <div className='firstCont'>
                <div>
                    <p>{allProjects[2].name}</p>
                </div>
                <div className='technologiesProject'>
                    {allProjects[2].technologies.map(eachTech => 
                      <img key={eachTech.name} src={eachTech.image} alt='' className='tecnologies' />
                    )}
                </div>
            </div>
            <div className='secondCont3'>
              <p>{allProjects[2].date}</p>
            </div>
          </div>

          <div className='eachprojectCont'>
            <div className='firstCont'>
                <div>
                    <p>{allProjects[4].name}</p>
                </div>
                <div className='technologiesProject'>
                    {allProjects[4].technologies.map(eachTech => 
                      <img key={eachTech.name} src={eachTech.image} alt='' className='tecnologies' />
                    )}
                </div>
            </div>
            <div className='secondCont4'>
              <p>{allProjects[4].date}</p>
            </div>
          </div>

    </div>
  )
}

export default Projects