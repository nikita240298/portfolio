import React from 'react';
import profile_img from '../../assets/img/photo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <section id="home" className="hero bg-light pb-5 pt-5" >
      <div className="container d-flex flex-column align-items-center">
        <img
          src={profile_img}
          alt="Profile"
          className="rounded-circle shadow mb-4"
          style={{ width: '180px', height: '180px', objectFit: 'cover', marginTop: '80px' }}
        />

        <h1 className="display-5 fw-medium mx-auto text-center" style={{ maxWidth: '700px' }}>
          <span
            style={{ background: 'linear-gradient(#e66465, #9198e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
           Hello, I'm Nikita Gharjale,
          </span>{' '}
          Fullstack Developer Based in Nagpur
        </h1>

        <p className="lead mt-3 mx-auto fw-bold" style={{ maxWidth: '600px' }}>
          Frontend Developer | Backend  Developer 
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
          <AnchorLink href="#contact" className="btn text-white fw-semibold"
            style={{ background: 'linear-gradient(#e66465, #9198e5)', borderRadius: '50px',padding: '12px 25px'}} >
            Connect With Me
          </AnchorLink>

          <a href="/path-to-resume.pdf" // Replace with actual resume link
            target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary fw-semibold"
            style={{ borderRadius: '50px', padding: '12px 30px' }}>
            My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
