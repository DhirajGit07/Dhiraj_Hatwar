// import React, { useRef } from "react";
// import "./WorkExerience.css";
// import { WORK_EXPERIENCE } from "./utils/data";
// import ExperienceCard from "./ExperienceCard";
// import Slider from "react-slick";

// const WorkExperience = () => {
//   const slideRef = useRef();
//   const settings = {
//     dots: false,
//     infinte: true,
//     speed: 500,
//     slideToShow: 2,
//     slideToScroll: 1,
//     arrow: false,
//     resposive: [
//       {
//         breakpoint: 769,
//         settings: {
//           slideToShow: 1,
//           slideToScroll: 1,
//         },
//       },
//     ],
//   };

//   const slideRight = () => {
//     slideRef.current.slickNext();
//   };

//   const slideLeft = () => {
//     slideRef.current.slickPrev();
//   };
//   return (
//     <>
//       <section className="experience-container">
//         <h5>Project Work</h5>

//         <div className="experience-content">
//           <div className="arrow-right" onClick={slideRight}>
//             <span className="material-symbols-outlined">chevron_right</span>
//           </div>

//           <div className="arrow-left" onClick={slideLeft}>
//             <span className="material-symbols-outlined">chevron_left</span>
//           </div>
//           <Slider ref={slideRef} {...settings}>
//             {WORK_EXPERIENCE.map((item) => (
//               <ExperienceCard key={item.title} details={item} />
//             ))}
//           </Slider>
//         </div>
//       </section>
//     </>
//   );
// };

// export default WorkExperience;



import React, { useRef } from "react";
import "./WorkExerience.css";
import { WORK_EXPERIENCE } from "./utils/data";
import ExperienceCard from "./ExperienceCard";
import Slider from "react-slick";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";


const WorkExperience = () => {
  const slideRef = useRef();
  const settings = {
    dots: false,
    infinite: true, // Corrected from "infinte" to "infinite"
    speed: 500,
    slidesToShow: 2, // Corrected from "slideToShow" to "slidesToShow"
    slidesToScroll: 1, // Corrected from "slideToScroll" to "slidesToScroll"
    arrows: false, // Corrected from "arrow" to "arrows"
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    slideRef.current.slickNext();
  };

  const slideLeft = () => {
    slideRef.current.slickPrev();
  };

  return (
    <section className="experience-container">
      <h5>Project Work</h5>

      <div className="experience-content">
        <div className="arrow-left" onClick={slideLeft}>
          <span className="material-symbols-outlined"><IoChevronBack />
          </span>
        </div>

        <Slider ref={slideRef} {...settings}>
          {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>

        <div className="arrow-right" onClick={slideRight}>
          <span className="material-symbols-outlined"><IoChevronForwardOutline />
          </span>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
