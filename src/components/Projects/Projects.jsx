import React from 'react';

const Projects = () => (
  <div id="projects" className="container-fluid bg-dark text-white py-5">
    <div className="container">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card bg-secondary text-white h-100">
            <div className="card-body">
              <h5 className="card-title">Portfolio Website</h5>
              <p className="card-text">
                Responsive React portfolio with contact form and smooth animations.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card bg-secondary text-white h-100">
            <div className="card-body">
              <h5 className="card-title">Retailer Finder App</h5>
              <p className="card-text">
                Fullstack app to search medicine retailers using city + medicine filters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
