// import React from "react";
// import { Link} from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
 
//   const scrollToSection = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <nav className="nav-wrapper">
//       <div className="nav-content">
//         <img className="logo" src="/assets/images/logo2.png" alt="Logo" />
//         <ul style={{cursor:"pointer"}}>
//           <li><a onClick={() => scrollToSection("home")}>Home</a></li>
//           <li><a onClick={() => scrollToSection("skills")}>Skills</a></li>
//           <li><a onClick={() => scrollToSection("projects")}>Projects</a></li>
//           <li><a onClick={() => scrollToSection("Project Work")}>Project Details</a></li>
//           <li><a onClick={() => scrollToSection("contact")}>Contact Me</a></li>
//           <li><a onClick={() => scrollToSection("Footer")}>Footer</a></li>
//           <li style={{padding:"8px", borderRadius:"4px",background:"white"}}><Link to="/hire-me">Hire Me</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close menu after scrolling
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <img className="logo" src="/assets/images/LOGOBOX.png" alt="Logo" />
        
        {/* Menu Toggle Button */}
        <button className="menu-btn" onClick={toggleMenu}>
          &#9776;
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`} style={{ cursor: "pointer" }}>
          <li><a className="menu-item" onClick={() => scrollToSection("home")}>Home</a></li>
          <li><a className="menu-item" onClick={() => scrollToSection("skills")}>Skills</a></li>
          <li><a className="menu-item" onClick={() => scrollToSection("projects")}>Projects</a></li>
          <li><a className="menu-item" onClick={() => scrollToSection("Project Work")}>Project Details</a></li>
          <li><a className="menu-item" onClick={() => scrollToSection("contact")}>Contact Me</a></li>
          <li><a className="menu-item" onClick={() => scrollToSection("Footer")}>About </a></li>
          <li >
            <Link className="menu-item" to="/hire-me">Hire Me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
