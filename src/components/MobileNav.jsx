// import React from 'react'
// import "./MobileNav.css";
// import logo from '../logo.svg';
// const MobileNav = ({isOpen,toggleMenu}) => {

//   console.log(isOpen,toggleMenu)
//   return (
//     <>
//       <div className={`mobile-menu ${isOpen ?"active":""}`}
//       onClick={toggleMenu}>
//         <div className='mobile-menu-container'>
//             <img className='logo' src={logo} alt="" />

//             <ul>
//             <li>
//               <a className="menu-item">Home</a>
//             </li>

//             <li>
//               <a className="menu-item">Skills</a>
//             </li>

//             <li>
//               <a className="menu-item">Projects Works</a>
//             </li>

//             <li>
//               <a className="menu-item">Contact Me</a>
//             </li>

//             <li>
//               <a className="menu-item">Footer</a>
//             </li>

//             <button className="contact-btn" onClick={() => {}}>
//               Hire me
//             </button>
//           </ul>
//         </div>

//       </div>
//     </>
//   )
// }

// export default MobileNav



import React from "react";
import logo from "../logo.svg";
import "./MobileNav.css";


const MobileNav = ({ isOpen, toggleMenu, onHireMeClick }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
      <div className="mobile-menu-container" onClick={(e) => e.stopPropagation()}>
        <img className="logo" src={logo} alt="Logo" />
        <ul>
          <li><a className="menu-item" onClick={toggleMenu}>Home</a></li>
          <li><a className="menu-item" onClick={toggleMenu}>Skills</a></li>
          <li><a className="menu-item" onClick={toggleMenu}>Projects Works</a></li>
          <li><a className="menu-item" onClick={toggleMenu}>Contact Me</a></li>
          <li><a className="menu-item" onClick={toggleMenu}>Footer</a></li>
          <button className="contact-btn" onClick={onHireMeClick}>Hire me</button>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
