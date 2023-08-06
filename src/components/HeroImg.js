import { Link } from 'react-router-dom'
import './HeroImgStyles.css'
import React from 'react'
import intro from '../assets/intro.jpg'

const HeroImg = () => {
  return (
   <div className='hero'>
    <div className='mask'>
 
    <img className='intro'  src={intro} alt='intro'/>
    </div>
    <div className='content'>
        <p>HI,IM A FREELNCER </p>
        <h1>React Developer</h1>    
        <div>
        <Link to="/About" className='btn'>About</Link>
        <Link to ="/contact" className='btn btn-light'>contact</Link>
    </div>
   </div>
   </div>
  )
}

export default HeroImg