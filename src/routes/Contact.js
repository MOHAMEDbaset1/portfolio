import React from 'react'
import Footer from '../components/Footer';      
import Navbar from '../components/Navbar';
import Hero2 from '../components/Hero2';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
       <Navbar/>
        <Footer />
        <Hero2 heading="CONTACT" text="lets have a chat"/>
        <Form/>
        
    
    </div>
  )
}

export default Contact