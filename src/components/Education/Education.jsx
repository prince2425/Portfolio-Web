import React from 'react'
import './Education.css'
import {RiGraduationCapFill} from "react-icons/ri";
import {BsSuitcaseLgFill} from "reeact-icon/bs";
const Education = () => {

  const Card = (props) =>{
    <div className="card design">
      <div className='flex gap-1 border-btn p-bottom-1'>
        <div className="icon-container green-inverse">
        {props.icon}
        </div>
          <h3>{props.title}</h3>
      </div>

      <div className='mt-2'>
        {props.item.map(education =>{
          return(
            <div className="flex between mt-2" key={education.id}>
              <div>
                <span className='sub-text'>{education.institute}</span>
                <p>{education.subtitle}</p>
              </div>
              <div className="list">{education.data}</div>
            </div>
          )
        })}
      </div>

    </div>
  }



  return (
    <section>
        <div className="wrapper p-block-9 border-btn">
            <div className='text-center'>
                <span className='sub-overlay-text middle' datatype='Education & Work'>education & Work</span>
                <h2>
                    My <span className='green-text'>Academic & <br /> Professional</span> Journey
                </h2>
            </div>

            <div className=' flex gap-5 mt-5'>
              <Card item={education} title='Education' icon={RiGraduationCapFill}/>
              <Card item={workExperience} title='Work Experience' icon={BsSuitcaseLgFill}/>
            </div>
        </div>
    </section>
  )
}

export default Education







const education = [
  {
    id:1,
    institute:'Harmony Institute',
    subtitle:'Master in Visula Arts',
    data:'2012-2014'
  },
    {
    id:1,
    institute:'Harmony Institute',
    subtitle:'Master in Visula Arts',
    data:'2012-2014'
  },
    {
    id:1,
    institute:'Harmony Institute',
    subtitle:'Master in Visula Arts',
    data:'2012-2014'
  },
]





const workExperience = [
  {
    id:1,
    institute:'Harmony Institute',
    subtitle:'Master in Visula Arts',
    data:'2012-2014'
  },
    {
    id:1,
    institute:'Harmony Institute',
    subtitle:'Master in Visula Arts',
    data:'2012-2014'
  },
    {
    id:1,
    institute:'Harmony Institute',
    subtitle:'Master in Visula Arts',
    data:'2012-2014'
  },
]