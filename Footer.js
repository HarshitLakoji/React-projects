import React from 'react';
import './Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faLinkedinIn,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer" id='footer'>
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About GIETU</h2>
          <p>
            GIET University, Gunupur is a renowned institution offering quality education and innovation-driven learning in Odisha.
          </p>
        </div>

        <div className="footer-section quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/aboutgietu">About</a></li>
            <li><a href="/applicationform">Admissions</a></li>
            <li><a href="/Academics">Academics</a></li>
            <li><a href="/placementrecords">Placements</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Contact</h2>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Gobriguda, Po- Kharling, Gunupur, Rayagada, Odisha - 765022</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:enquiry@giet.edu">enquiry@giet.edu</a></p>
          <p><FontAwesomeIcon icon={faPhone} /> <a href="tel:+917735745535">+91-7735745535</a>, 
          <a href="tel:+916857250172">06857-250172</a></p>
        </div>

        <div className="footer-section map">
  <h2>Find Us</h2>
  <div className="map-container">
  <iframe 
  title="GIET University Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.5990306087774!2d85.79224897469476!3d20.27545761322613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a788d800dd49%3A0xb9ce7fb0406001be!2sGIET%20University%20Gunupur%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1746610415022!5m2!1sen!2sin" 
  width="200"
  height="200" 
  style={{ border: 0 }} 
  allowFullScreen="" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade">    
  </iframe>
  </div>
</div>

        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com/gietuniversity" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://twitter.com/gietuniversity" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.youtube.com/@GIETUniversityGunupur" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="https://www.linkedin.com/school/gietuniversitygunupur" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://www.instagram.com/gietuniversitygunupur" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://wa.me/917735745535" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 GIET University, Gunupur. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;