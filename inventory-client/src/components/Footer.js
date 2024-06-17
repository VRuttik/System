import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure FontAwesome is imported

function Footer() {
  return (
    <footer className="footer">
      <span className="footer-copyright">
        © Copyright Advika Welfare Foundation. All Rights Reserved.
      </span>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
        <br></br><br></br>
        <i className="fab fa-facebook"></i> &nbsp;&nbsp;
        <i class="fa-brands fa-instagram"></i>
      </a>
    </footer>
  );
}

export default Footer;