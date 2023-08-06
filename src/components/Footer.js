
import "./FooterStyles.css"
import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                 <div className="location">
                    <FaHome size={20} style={{color:'#fff' , marginRight:'2rem'}} />
                    <div>
                        <p>Alexandria</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color:'#fff' , marginRight:'2rem'}} />
                01210222469
                    </h4>
                </div>
                <div className="eimal">
                    <h4>
                    <FaMailBulk size={20} style={{color:'#fff' , marginRight:'2rem'}} />
                mohamedabdelbast196@gmail.com
                    </h4>
                </div>

            </div>
            <div className="right"> 
            <div className="social">
            <FaFacebook size={30} style={{color:'#fff' , marginRight:'2rem'}} />
            <FaLinkedin size={20} style={{color:'#fff' , marginRight:'2rem'}} />
            <FaGithub size={20} style={{color:'#fff' , marginRight:'2rem'}} />
            <FaTwitter size={20} style={{color:'#fff' , marginRight:'2rem'}} />
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer