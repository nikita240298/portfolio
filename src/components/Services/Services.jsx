import React from 'react';
import "./Services.css"
import webImg from '../../assets/img/web.jpg';
import bugImg from '../../assets/img/bug.jpg';
import landingImg from '../../assets/img/landing.jpg';

const services = [
  {
    title: 'Responsive Web Design',
    desc: 'I build sleek, mobile-responsive websites using modern tools like React and Bootstrap.',
    img: webImg,
  },
  {
    title: 'Frontend Integrations',
    desc: 'Connecting frontend with REST APIs and backend logic.',
    img: bugImg,
  },
  {
    title: 'Landing Pages',
    desc: 'Create professional portfolios and product landing pages that convert.',
    img: landingImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="hero bg-light pb-5 pt-5">
      <div className="container">
        <h2 className="fw-bold mb-5 text-center"
          style={{fontSize: '42px',background: 'linear-gradient(#e66465, #9198e5)',WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent',}}>
          Services I Offer
        </h2>

        <div className="row justify-content-center g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card text-white text-center shadow border-0 h-100"
                style={{backgroundImage: `url(${service.img})`,backgroundSize: 'cover',backgroundPosition: 'center',borderRadius: '16px',position: 'relative',overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}>
                {/* Overlay */}
                <div style={{position: 'absolute',top: 0,left: 0,width: '100%',height: '100%',backgroundColor: 'rgba(0,0,0,0.5)',zIndex: 0,}}>
                  </div>

                {/* Content */}
                <div className="card-body position-relative z-1 p-4">
                  <h3 className="card-title mb-3">{service.title}</h3>
                  <p className="card-text">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
