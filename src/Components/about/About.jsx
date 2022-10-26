import React from 'react'
import './About.css'
import ME from '../../assets/Me3.jpg'


import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
   <section id='about' className='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

  
    <div className='container-about__container'>
     <div className="about__me">
      <div className="about__me-image">
        <img src={ME}alt='me'/>
      </div>
    </div>

    
    


    <div className="about__content">
      <div className="about__cards">
        <article className="about__card">
          <FaAward className='about__icon'/>
          <h5>Experinces</h5>
          <small>1+ Years Experience</small>
        </article>

        <article className="about__card">
          <FiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small> 10+ Worldwide</small>
        </article>

        <article className="about__card">
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>12 Completed and delivered</small>
        </article>
        
      </div>
      

      <p className='para'>
        Hi,<br></br>I'm Ashu. I'm a Software Development Engineer based in Greater Noida. <br></br>I'm always curious about new technologies. Currently I'm working on so many projects and start-up ideas.<br></br>
    

      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </p>

    </div>
    </div>
    
   </section>
  )
}

export default About