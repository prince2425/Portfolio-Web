import React from 'react'
import Project1 from '../../assets/project1.jpg'
import Project2 from '../../assets/project2.jpg'
import Project3 from '../../assets/project3.jpg'
import './Projects.CSS'
import {FaArrowRight} from 'react-icons/fa';

const Projects = () => {

    const renderProjectsData = projectsData.map(project => {
        return(
            <div className="card flex gap-5 project" key={project.Id}>
                <div className="project-image">
                    {/* <img src={project-image} alt="" /> */}
                </div>

                <div className="project-content">
                    <ul className='flex gap-1'>
                        {project.tech.map(technology =>{
                            return(
                                <li key={technology.id} className='list'>{technology.list}</li>
                            )
                        })}
                    </ul>
                    <h3 className='mt-2'>{project.title}</h3>
                    <p className='para'>{project.description}</p>
                    <a href="#" className='icon-container border-inverse rotate'>
                        <FaArrowRight />
                    </a>
                </div>
            </div>
        )
    })



  return (
    <section>
        <div className="wrapper p-block-9">
            <div className="wrapper p-block-9 border-btn">
        <div className="flex between gap-4">
          <div>
            <span className="sub-text overlay-text" datatype="My portfolio">
              My Portfolio
            </span>
            <h2>
              Let's Have a look <br /> at<span className="green-text">My Portfolio</span>
            </h2>
          </div>

          <a href="#" className="btn self-end">
            View All Projects
          </a>
        </div>
        <div className='flex column gap-2 mt-5'>
            {renderProjectsData}
        </div>
        </div>

</div>
    </section>
  )
}

export default Projects









const projectsData = [
    {
        Id: 1,
        title: 'Smart Financial Dashboard for Digital Management',
        description:'dmsl;jasgamng, a  fgnddfkg fg g gfjg fgg a fnafnajfja faf as fas fasjd fsaj fals hfah',
        image:Project1,
        tech:[
            {
                id:1,
                list: 'React js'
            },
            {
                id:2,
                list: 'MUI CSS'
            },
            {
                id:3,
                list: 'Chart js'
            },
        ]
    },
     {
        Id: 2,
        title: 'Modern VPN App Interface for Secure Connectivity',
        description:'dmsl;jasgamng, a  fgnddfkg fg g gfjg fgg a fnafnajfja faf as fas fasjd fsaj fals hfah',
        image:Project2,
        tech:[
            {
                id:1,
                list: 'Flutter'
            },
            {
                id:2,
                list: 'Dart'
            },
            {
                id:3,
                list: 'Figma'
            },
        ]
    },
     {
        Id: 3,
        title: 'rf;gkfgga;ldffkd  d fad jfad fa f f f df  fdlk adlk',
        description:'dmsl;jasgamng, a  fgnddfkg fg g gfjg fgg a fnafnajfja faf as fas fasjd fsaj fals hfah',
        image:Project3,
        tech:[
            {
                id:1,
                list: 'Flutter'
            },
            {
                id:2,
                list: 'Dart'
            },
            {
                id:3,
                list: 'Adobe XD'
            },
        ]
    },
]
