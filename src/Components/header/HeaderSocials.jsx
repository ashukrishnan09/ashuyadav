import React from 'react'

import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='https://www.linkedin.com/in/ashukrishnan09/'target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/ashukrishnan09'target='_blank'><FaGithub/></a>
        <a href='http://instagram.com/ashu.macin.tosh/'target='_blank'><GrInstagram/></a>  
    </div>
  )
}

export default HeaderSocials