import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { SiWhatsapp } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="box-container">
          <h1>Want to Hire Influencers?</h1>
          <button>Contact us</button>
        </div>
        <div className="permalinks-container">
          <ul className="permalinks">
            <li>
              <a href="">ABOUT US </a>
            </li>
            <li>
              <a href="">OUR SERVICES</a>
            </li>
            <li>
              <a href="">T&C</a>
            </li>
            <li>
              <a href="">CASE STUDY</a>
            </li>
            <li>
              <a href="">PRESS RELEASE</a>
            </li>
            <li>
              <a href="">CONTACT US</a>
            </li>
          </ul>
        </div>
        <div className="footer__socials">
          <p>SOCIALISE</p>
          <a href="" target="_blank">
            <SlSocialInstagram />
          </a>
          <a href="" target="_blank">
            <SiWhatsapp />
          </a>
          <a href="" target="_blank">
            <SlSocialLinkedin />
          </a>
        </div>
      </div>
      <div className="footer__copyright">
    
         <small> Copyrights © 2020 Brandlytical. </small>
      </div>
    </>
  );
};

export default Footer;
