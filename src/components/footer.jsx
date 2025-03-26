import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/footer.css';

const Footer = () => {
  return (
    <footer className="bookmyshow-footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/sports">Sports</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Popular Cities</h4>
          <ul>
            <li>Mumbai</li>
            <li>Delhi</li>
            <li>Bangalore</li>
            <li>Hyderabad</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 BookMyShow Clone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;