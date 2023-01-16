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
        <div className='projectsComponent'>

          <div className='eachprojectCont'>
            <div className='firstCont'>
                <div>
                    <p>{todos[0].name}</p>
                </div>
                <div className='tecnologiesProject'>
                    <ul>
                    {todos[0].technologies.map(dale => 
                      <li><img src={dale.image} alt='' /></li>
                    )}
                    </ul>
                </div>
            </div>
            <div className='secondCont'>
              <p>{todos[0].date}</p>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Projects