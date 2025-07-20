import React from 'react'; 
import webdesignImg from '../../assets/img/webdesign.jpg';
import Fullstack from '../../assets/img/portfoli.jpg';

const About = () => {
  return (
<section id="about" className=" pt-5 pb-5 bg-light">
     <div className="container text-center">
        {/* Section Title */}
        <h2 className="fw-bold mb-4" style={{fontSize: '38px', background: 'linear-gradient(#e66465, #9198e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          About Me
        </h2>
        <div className="row justify-content-center align-items-start gy-4">
          {/* Left Column: Info & Tech Stack */}
          <div className="col-lg-7 text-center">
            <p>  I'm <strong>Nikita Gharjale</strong>, a passionate Fullstack Developer from Nagpur,India
             <br /> with <span className="text-danger fw-semibold">1+ years of experience in React, Node.js, MySQL.</span>
            </p>
            <p>
              I specialize in creating clean, user-friendly responsive websites and custom dashboards using modern web technologies.
            </p>

            {/* Tech Stack */}
            <div className="mt-4">
              <h5 className="fw-semibold mb-3 text-danger">Tech Stack</h5>
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                {['HTML5 & CSS3', 'Bootstrap 5', 'JavaScript(ES6+)', 'React JS', 'Next JS', 'Node JS','Express JS','MySQL','MongoDB'].map((tech, idx) => (
                  <span key={idx} className="badge text-white"
                    style={{background: 'linear-gradient(90deg, #e66465, #9198e5)', padding: '8px 16px',borderRadius: '20px',fontSize: '14px',
                      fontWeight: '500'}}>{tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Stats */}
          <div className="col-lg-6 text-center text-lg-start">
          <div className="container">
            <h2 className="text-center mb-4" style={{fontSize: '38px', background: 'linear-gradient(#e66465, #9198e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Projects</h2>
              <div className="row g-4">
                 <div className="col-md-6">
                   <div className="card bg-secondary text-white h-100">
                     <div className="card-body position-relative z-1"
                      style={{backgroundImage:`url(${Fullstack})`,borderRadius: '16px'}}>
                      <h5 className="card-title text-center text-white fw-bold">Portfolio Website</h5>
                        <p className="card-text text-white">
                            Responsive React portfolio with contact form and smooth animations.
                        </p>
                    </div>
                  </div>
                 </div>

             <div className="col-md-6">
              <div className="card bg-secondary text-white h-100">
                 <div className="card-body position-relative z-1" 
                 style={{backgroundImage:`url(${webdesignImg})`,backgroundSize: 'cover',backgroundPosition: 'center',borderRadius: '16px'}}>
                   <h5 className="card-title text-center text-white fw-bold">Medicinal Purpose Website</h5>
                    <p className="card-text text-white">
                       Fullstack website to search medicine retailers using city + medicine filters.
                    </p>
                 </div>
              </div>
            </div>
         </div>
         </div>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default About;
