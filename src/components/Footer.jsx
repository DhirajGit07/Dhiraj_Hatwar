import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  // const [openMenu, setOpenMenu] = useState(false);


  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    
  };

  const currentYear = new Date().getFullYear();

  return (
    
    <footer className="footer">
      <div className="footer-container">

         {/* Contact Info */}
         <div className="footer-section">
          <h4 style={{color:"black"}}>About Me</h4>
          <p>Passionate and dedicated web developer with a strong background in React.js and Node.js, constantly eager to learn and tackle new challenges in the tech world.</p>
          <p>Phone: <span style={{color:"black"}}> 91+ 860 0770 710</span></p>
          <p >Email: <a style={{color:"black"}} href="dhiraj2000hatwar@gmail.com">dhiraj2000hatwar.com</a></p>
        </div>

        {/* Important Links */}
        <div className="footer-section">
          <h4 style={{color:"black"}}>Important Links</h4>
          <ul style={{cursor:"pointer"}}>
            <li><a  onClick={() => scrollToSection("home")}>Home</a></li>
            <li><a onClick={() => scrollToSection("skills")}>Skills</a></li>
            <li><a onClick={() => scrollToSection("projects")}>Project</a></li>
            <li><a onClick={() => scrollToSection("Project Work")}>Project Details</a></li>
            <li><a onClick={() => scrollToSection("contact")}>Contact Me</a></li>
          </ul>
        </div>

        {/* Important Links */}
        <div className="footer-section">
          <h4 style={{color:"black"}}>My Project Links</h4>
          <ul>
            <li><a href="#about">InVentory</a></li>
            <li><a href="https://employmanagment.netlify.app">Employee Management System</a></li>
            <li><a href="#blog">Student Management</a></li>
            <li><a href="#contact">Hotronics Trading App</a></li>
            <li><a href="https://spotify07.netlify.app/">Spotify Clone App</a></li>
          </ul>
        </div>  

        {/* Social Links */}
        <div className="footer-section social">
          <h4 style={{color:"black"}}>Connect With Me</h4>
          <a href="https://www.linkedin.com/in/dhiraj-hatwar-3a2b2000c07/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a><br />
          <a href="https://github.com/DhirajGit07" target="_blank" rel="noopener noreferrer"><FaGithub /></a><br />
          <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank" rel="noopener noreferrer"><FaBriefcase /></a><br />
          <a href="mailto:dhiraj2000hatwar@gmail.com"><FaEnvelope /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
      <p>Copyright © {currentYear} Dhiraj Hatwar. All rights reserved.</p>
      
      </div>
    </footer>
  );
};

export default Footer;
