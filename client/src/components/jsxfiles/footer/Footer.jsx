import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="foter_container">
        <footer>
          <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
          </div>
          <ul className="social_icons">
            <li>
              <a href="/">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="/">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="/">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a href="/">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
          </ul>

          <ul className="menu">
            <li>
              <Link className="nav-link fontsizenav" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link fontsizenav" to="/service">
                Service
              </Link>
            </li>

            <li>
              <Link className="nav-link fontsizenav" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="nav-link fontsizenav" to="/about">
                About Me
              </Link>
            </li>
          </ul>

          <p>© 2023 Abhishek website | All rights are reserved </p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
