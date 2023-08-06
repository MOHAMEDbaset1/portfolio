import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import Experience from '../components/Experience';
const About = () => {
  return (
    <div>
        <Navbar/>
        <Footer/>
        <Hero2 heading="ABOUT"  text="Im React developer"/>
        <Experience/>
    </div>
  )
}

export default About;