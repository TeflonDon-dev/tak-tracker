import React from 'react'
import { Link } from 'react-router-dom';
import { FaTwitter,FaGithub,FaWhatsapp } from 'react-icons/fa';
const About = () => {
  return (
      <>
          <p>My name is Joshua Okorie. I'm a pharmacist and I'm currently venturing into the tech space as a  front end developer.</p>
          <p>My current technology stack is HTML5, CSS3, vanilla javascript, tailwindCSS, bootstrap5 and React JS</p>
          
              <h3 style={{marginTop:"15px", textAlign:"center",color:"steelblue",marginBottom:"15px"}}>Connect with me </h3>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
              <a href="https://twitter.com/joshuaokorie008"> <FaTwitter style={{ height: "30px", width: "30px" }} /></a>
             
              <a href="https://github.com/TeflonDon-dev"> <FaGithub style={{height:"30px",width:"30px"}}/></a>
                 
                 <a href="https://wa.me/08148429444"> <FaWhatsapp style={{height:"30px",width:"30px"}}/></a> 
                 
            </div>
        
          <Link to="/">Home</Link>
    </>
  )
}

export default About