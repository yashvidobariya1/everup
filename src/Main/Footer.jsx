import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-section">
          <img
            src="/Images/everuplogo.png"
            alt="everup logo"
            className="logo"
          />
          <p className="tagline">Your trusted source for digital gift cards</p>
          <p className="company-details">
            everup Ltd is a company registered in England and Wales with the
            registered company number 12462608 and its registered address at
            Arquen House 4-6 Spicer Street, St. Albans, England, AL3 4PQ.
          </p>
          <div className="app-buttons">
            <button>
              <img src="/Images/applywhite.png" alt="App Store" />
              App Store
            </button>
            <button>
              <img src="/Images/playstore.png" alt="Google Play" />
              Google Play
            </button>
          </div>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>support@everup.uk</p>
          <img src="/Images/qr.png" alt="QR Code" className="qr" />
          <p className="qr-text">Scan with your phone and download everup</p>
        </div>

        <div className="footer-section">
          <h4>Follow us</h4>
          <div className="social-icons">
            <img src="/Images/fb.png" alt="Facebook" />
            <img src="/Images/x.png" alt="Twitter" />
            <img src="/Images/insta.png" alt="Instagram" />
            <img src="/Images/linkedin.png" alt="LinkedIn" />
            <img src="/Images/tiktok.png" alt="TikTok" />
          </div>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <p>Terms and Conditions</p>
          <p>Competition Rules</p>
          <p>Gift Cards Terms</p>
          <p>Privacy and Cookie Policy</p>
          <p>Customer Complaints Policy</p>
        </div>
      </footer>
      <div className="footer-bottom">
        <p>© 2025 Everup. All rights reserved.</p>
        <p className="version">version 1.0.1</p>
      </div>
    </>
  );
}

export default Footer;
