import React from 'react'
import './Footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsSnapchat} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='footer'>
      <a href='#'className='footer__logo'>ASHU KRISHNAN</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        
        
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.instagram.com/ashu.macin.tosh/'className='footer__socials-icon'><BsInstagram/></a>
        <a href='https://www.snapchat.com/amashuuniverse/'className='footer__socials-icon'><BsSnapchat/></a>
        <a href='https://www.linkedin.com/in/ashukrishnan09//'className='footer__socials-icon'><BsLinkedin/></a>
        <a href='https://github.com/ashukrishnan09'className='footer__socials-icon'><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>2023  &copy;Ashu Krishnan.All right reserved.</small>
      </div>
  
    </footer>
  )
}

export default Footer