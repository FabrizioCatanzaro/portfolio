import React from 'react'
import './Projects.css'
import EachProject from '../../components/EachProject/EachProject'
import listOfProjects from '../../listOfProjects'

const Projects = () => {

  
  let todos = listOfProjects.map(e => e)
  console.log(todos);

  return (
    <div className='projects'>
        <h2 className='titlePage'>Projects I've been working on<span className='dotColored'>.</span></h2>

          <div className='eachprojectCont'>
            <div className='firstCont'>
                <div>
                    <p>{todos[0].name}</p>
                </div>
                <div className='technologiesProject'>
                    {todos[0].technologies.map(dale => 
                      <img key={dale.name} src={dale.image} alt='' className='tecnologies' />
                    )}
                </div>
            </div>
            <div className='secondCont'>
              <p>{todos[0].date}</p>
            </div>
          </div>

          <div className='eachprojectCont'>
            <div className='firstCont'>
                <div>
                    <p>{todos[1].name}</p>
                </div>
                <div className='technologiesProject'>
                    {todos[1].technologies.map(dale => 
                      <img key={dale.name} src={dale.image} alt='' className='tecnologies' />
                    )}
                </div>
            </div>
            <div className='secondCont2'>
              <p>{todos[1].date}</p>
            </div>
          </div>

          <div className='eachprojectCont'>
            <div className='firstCont'>
                <div>
                    <p>{todos[2].name}</p>
                </div>
                <div className='technologiesProject'>
                    {todos[2].technologies.map(dale => 
                      <img key={dale.name} src={dale.image} alt='' className='tecnologies' />
                    )}
                </div>
            </div>
            <div className='secondCont3'>
              <p>{todos[2].date}</p>
            </div>
          </div>

          <div className='eachprojectCont'>
            <div className='firstCont'>
                <div>
                    <p>{todos[4].name}</p>
                </div>
                <div className='technologiesProject'>
                    {todos[4].technologies.map(dale => 
                      <img key={dale.name} src={dale.image} alt='' className='tecnologies' />
                    )}
                </div>
            </div>
            <div className='secondCont4'>
              <p>{todos[4].date}</p>
            </div>
          </div>

    </div>
  )
}

export default Projects