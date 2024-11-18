import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HireMe.css';
import { IoMdArrowBack } from "react-icons/io";

const HireMe = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  const handleViewResume = () => {
    // Ensure the path points to the public folder
    window.open('/assets/images/Resume1.png', '_blank');
  };

  return (
    <div className='main-container'>
      <button onClick={handleBackClick} className="back-btn2">
        <IoMdArrowBack />
      </button>

      <div className="hire-me-container">
        <div className="intro-section">
          <h1>About Me</h1>
          <p>Hello! I’m a passionate React Developer with experience in building responsive web applications.</p>
        </div>

        <div className="skills-section">
          <h2>Skills</h2>
          <div className="skills-list">
            <span className="skill-badge">React</span>
            <span className="skill-badge">JavaScript</span>
            <span className="skill-badge">CSS</span>
            <span className="skill-badge">Bootstrap</span>
            <span className="skill-badge">Node.js</span>
            <span className="skill-badge">Express</span>
            <span className="skill-badge">Python</span>
            <span className="skill-badge">MySQL</span>
          </div>
        </div>

        <div className="experience-section">
          <h2>Experience</h2>
          <p>Currently, I’m interning at Sky Vision IT Services, where I’m building and optimizing web applications for performance and user experience.</p>
        </div>

        <div className="resume-section">
          <h2>Resume</h2>
          <div className="resume-buttons">
            <button onClick={handleViewResume} className="view-resume-btn">View My Resume</button>
            <a href="/assets/images/Resume1.png" download className="download-resume">
              Download My Resume
            </a>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="certificates-container mt-5">
          <h2>My Certificates</h2>
          <div className="certificates-gallery">
            {/* Certificate 1 */}
            <div className="certificate-card">
              <img src="/assets/images/FullStack.png" alt="Certificate 1" />
              <h3>Certificate Title 1</h3>
              <p>Details about Certificate 1, including what the certificate is for and when it was obtained.</p>
            </div>

            {/* Certificate 2 */}
            <div className="certificate-card">
              <img src="/assets/images/Python.png" alt="Certificate 2" />
              <h3>Certificate Title 2</h3>
              <p>Details about Certificate 2, including what the certificate is for and when it was obtained.</p>
            </div>

            {/* Certificate 3 */}
            <div className="certificate-card">
              <img src="/assets/images/SQL.png" alt="Certificate 3" />
              <h3>Certificate Title 3</h3>
              <p>Details about Certificate 3, including what the certificate is for and when it was obtained.</p>
            </div>

            {/* Certificate 4 */}
            <div className="certificate-card">
              <img src="/assets/images/OracalSQL.png" alt="Certificate 3" />
              <h3>Certificate Title 3</h3>
              <p>Details about Certificate 3, including what the certificate is for and when it was obtained.</p>
            </div>

            {/* Add more certificates as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
