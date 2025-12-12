import React from 'react'
import AboutImage from '../../assets/about-image.png'
import './AboutMe.css'
import CV from '../../assets/Resume.docx'

const AboutMe = () => {
  return (
    <section>
        <div className="flex gap-5 wrapper p-block-9 boredr-btn">
            <div className="about-image">
                <img src={AboutImage} />
            </div>

            <div className="about-content">
                <span className='sub-text overlay-text' datatype='About Me'>About Me</span>
                <h2>Who is <span className='green-text'>P Singh</span></h2>
                <p className='para'>
                    fsdfklasdhf asdhfkalsd ad fd fa dfhsad f dsfasdffas dff adf ad ad adjffasd fasd ffas dffasd fas df asfh
                </p>

                <div className="flex gap-2 m-block-3">
                    <div>
                        <h6>6000+</h6>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <h6>20+</h6>
                        <p>Industry Covered</p>
                    </div>
                    <div>
                        <h6>06+</h6>
                        <p>Years of Experience</p>
                    </div>
                </div>

                <a href={CV} dounload="My CV" className='btn'>Dounlode CV</a>
            </div>
        </div>
    </section>
  )
}

export default AboutMe