import React from 'react'
import './Projects.css'
import EachProject from '../../components/EachProject/EachProject'
import listOfProjects from '../../listOfProjects'

const Projects = () => {

  
  let allProjects = listOfProjects.map(e => e)
  console.log(allProjects);

  return (
    <section className='projects' id='projects'>
        <h2 className='titlePageProjects'>Projects I've been <span className='dotColored'>working</span> on<span className='dotColored'>.</span></h2>
        <div className='projectsCont'>

          {allProjects?.map( each => (
            <div key={each} className='eachprojectCont'>
              <div className='firstCont'>
                  <div>
                      <p>{each.name}</p>
                  </div>
                  <div className='technologiesProject'>
                      {each.technologies.map(eachTech => 
                        <img key={eachTech.name} src={eachTech.image} alt='**' className='tecnologies' />
                      )}
                  </div>
              </div>
              <div className='secondCont'>
                <img src={each?.image} alt={each.name} />
                <p>{each.date}</p>
              </div>
              <div className='thirdCont'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" strokeWidth="0" fill="currentColor"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" strokeWidth="0" fill="currentColor"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>

          {/* <div className='eachprojectCont'>
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
            <div className='secondCont2' style={{backgroundImage: '../public/screen-rftc.png', backgroundSize: 'cover', backgroundPosition: 'center'}}>
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
          </div> */}

    </section>
  )
}

export default Projects