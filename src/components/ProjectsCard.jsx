// import React from 'react';
// import './ProjectsCard.css'; // Add a CSS file for styling if needed

// // Sample project data
// const projectData = [
//   {
//     id: 1,
//     image: '/assets/images/Linkedin.png', // replace with your image path
//     title: 'Employmanagment',
//     // description: 'A multi-column, flexbox-based page layout and hero image with a tinted overlay.',
//     buttonText: 'View project',
//     link: 'https://employmanagment.netlify.app/'
//   },
//   {
//     id: 2,
//     image: '/assets/images/Naukari.png', // replace with your image path
//     title: 'spotify07',
//     // description: 'A web page for a fashion retailer with a background video that plays in a continuous loop.',
//     buttonText: 'View project',
//     link: 'https://spotify07.netlify.app/'
//   },
//   {
//     id: 3,
//     image: '/assets/images/github_5968896.png', // replace with your image path
//     title: 'Hero Block Gallery',
//     // description: 'A gallery of hero block elements with split-screen layouts and duotone images.',
//     buttonText: 'View project',
//     link: 'https://employmanagment.netlify.app/'
//   }
// ];

// export default function ProjectsCard() {
//   return (
//     <div className="projects-container">
//       {projectData.map((project) => (
//         <div key={project.id} className="project-card">
//           <img src={project.image} alt={project.title} className="project-image" />
//           <div className="project-content">
//             <h3 className="project-title">{project.title}</h3>
//             {/* <p className="project-description">{project.description}</p> */}
//             <a href={project.link} className="project-button">{project.buttonText} ➔</a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './ProjectsCard.css';

// Sample project data
const projectData = [
  {
    id: 1,
    image: '/assets/images/Screenshot 2024-10-28 101103.png',
    title: 'Employmanagment',
    buttonText: 'View project',
    link: 'https://employmanagment.netlify.app/',
  },
  {
    id: 2,
    image: '/assets/images/Screenshot 2024-10-28 101128.png',
    title: 'Spotify07',
    buttonText: 'View project',
    link: 'https://spotify07.netlify.app/',
  },
  {
    id: 3,
    image: '/assets/images/Inventory.png',
    title: 'Hero Block Gallery',
    buttonText: 'View project',
    link: 'https://inventory07.netlify.app/',
  },
  {
    id: 4,
    image: '/assets/images/Photo.jpeg',
    title: 'Hero Block Gallery',
    buttonText: 'View project',
    link: 'https://employmanagment.netlify.app/',
  },
  {
    id: 5,
    image: '/assets/images/html_14661237.png',
    title: 'Hero Block Gallery',
    buttonText: 'View project',
    link: 'https://employmanagment.netlify.app/',
  },
  {
    id: 6,
    image: '/assets/images/Linkedin.png',
    title: 'Hero Block Gallery',
    buttonText: 'View project',
    link: 'https://employmanagment.netlify.app/',
  },
];

export default function ProjectsCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 3 : prevIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3 < projectData.length ? prevIndex + 3 : prevIndex));
  };

  return (
    <section>
      <h5 className='ProjectsHead'>My Project</h5>
      <div className="projects-slider">
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="projects-container row">
          {projectData.slice(currentIndex, currentIndex + 3).map((project) => (
            <div key={project.id} className="project-card col-12 col-sm-4">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <a href={project.link} className="project-button">{project.buttonText} ➔</a>
              </div>
            </div>
          ))}
        </div>

        <button onClick={handleNext} disabled={currentIndex + 3 >= projectData.length}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
}
