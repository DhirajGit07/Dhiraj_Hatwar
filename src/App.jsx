


// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Skills from "./components/Skills";
// import WorkExperience from "./components/WorkExperience";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import ProjectsCard from "./components/ProjectsCard";
// import HireMe from "./components/HireMe";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <div className="container">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <section id="home">
//                   <Hero />
//                 </section>
//                 <section id="skills">
//                   <Skills />
//                 </section>
//                 <section id="ProjectsCard">
//                   <ProjectsCard />
//                 </section>
//                 <section id="work-experience">
//                   <WorkExperience />
//                 </section>
//                 <section id="contact">
//                   <Contact />
//                 </section >
                
//                 <section id="Footer">
//                 <Footer />
//                 </section >
//               </>
//             }
//           />
//           <Route path="/hire-me" element={<HireMe />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectsCard from "./components/ProjectsCard";
import HireMe from "./components/HireMe";

const MainLayout = () => (
  <>
    <Navbar />
    <div className="container">
      <section id="home">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <ProjectsCard />
      </section>
      <section id="Project Work">
        <WorkExperience />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="Footer">
        <Footer />
      </section>
    </div>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/hire-me" element={<><Navbar /><HireMe /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
