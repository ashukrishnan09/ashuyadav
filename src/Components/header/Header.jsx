import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/Me2.jpg'

import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ashu Krishnan</h1>
        <div className="text-light">Fullstack Devloper</div>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={Me}alt=''/>
         
        </div>
        
        <a href='#contact'className='scroll__down'>Scroll Down</a>
      </div>
      
    </header>
    
  )
}

export default Header