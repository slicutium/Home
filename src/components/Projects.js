import React from 'react'
import Project from './Project'
import projectData from '../projectData'
// import img1 from './static/birthday-reminder2.jpg'

const Projects = () => {
  return (
    <section className='projects'>
        <div className="title">
            <h2>Latest Projects</h2>
            <div className="title-underline"></div>
        </div>
        <div className="section-center">
            {
                projectData.map((project)=>{
                    return (
                        <Project key={project.id} project={project}/>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Projects