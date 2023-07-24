import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import b2 from "../assests/image/b2.jpg";
import { useSelector } from "react-redux";

const Navbar = () => {

  const {PortfolioUser}=useSelector((state)=>state.auth);
  return (
    <>
      <nav className="navbar navbar-expand-lg navg">
        <div className="container-fluid nav-div-container">
            <Link class="navbar-brand" to="#">
              <img
                src={b2}
                alt=""
                width="30"
                height="30"
                class="d-inline-block align-text-top"
              />
             Abhishek
             
            </Link>

            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link fontsizenav"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link fontsizenav" to="/about">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fontsizenav" to="/service">
                  Service
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link fontsizenav" to="/tech">
                  Technology Used
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link fontsizenav" to="/project">
                  Projects
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link fontsizenav" to="/contact">
                  Contact
                </Link>
              </li>
              
                <li className="nav-item">
                <Link className="nav-link fontsizenav" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
    </>
  );
};

export default Navbar;
