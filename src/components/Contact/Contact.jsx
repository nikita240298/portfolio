import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_yp9okxo',         // your service ID
      'template_qtbu7r7',        // your template ID
      form.current,
      'o6_oKsisQzFkIOGqr'        // your public key
    ).then((result) => {
      alert("Message sent successfully!");
      console.log(result.text);
    }, (error) => {
      alert("Error sending message");
      console.log(error.text);
    });

    e.target.reset(); // Reset form fields
  };

  return (
<section id="contact" className="hero bg-light pb-5 pt-5">
      <div className="container">
        {/* Section Heading */}
        <h2
          className="text-center fw-bold mb-5"
          style={{fontSize: '48px',background: 'linear-gradient(90deg, #e66465, #9198e5)',WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent'}}>
          Get in Touch
        </h2>

        {/* Layout: Left Info & Right Form */}
        <div className="row justify-content-center align-items-start gy-5">
          {/* Left Column */}
          <div className="col-md-5">
            <h3 className="text-danger fw-bold mb-3">Let's Talk</h3>
            <p className="text-muted">
              Hi! I’m Nikita Gharjale, a Fullstack Developer from Nagpur, India. I specialize in creating responsive websites. I love turning ideas into functional, elegant, and clean interfaces.
            </p>

            <div className="mt-4">
              <p><i className="fa-regular fa-envelope me-2"></i> nikigharjale@gmail.com</p>
              <p><i className="fa-solid fa-phone me-2"></i> </p>
              <p><i className="fa-solid fa-location-dot me-2"></i>Nagpur</p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="col-md-6">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" name="name" required className="form-control bg-light" placeholder="Enter Your Name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input type="email" name="email" required className="form-control bg-light" placeholder="Enter Your Email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Write Your Message here</label>
                <textarea name="message" rows="6" required className="form-control bg-light" placeholder="Enter Your message here"></textarea>
              </div>
              <button type="submit" className="btn text-white px-4 py-2"
                style={{background: 'linear-gradient(90deg, #e66465, #9198e5)',borderRadius: '30px',fontSize: '18px'}}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
