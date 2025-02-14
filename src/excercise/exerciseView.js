import React from "react";
import "./StyleExcerciseView.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Saly3 from "../image/Saly3.png";

const ExcerciseView = () => {
  return (
    <div>
      <header id="header-exerciseview">
        <ul id="navbar-exerciseview" className="poppins">
          <li>
            <Link className="logo" style={{ color: "#1C56ED" }} to="/home">
              iSchool
            </Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link style={{ color: "#1C56ED" }} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="logout-btn">
          <Link className="logout" to="/login">
            Log Out
          </Link>
        </div>
      </header>

      <div id="content-exerciseview">
        <p className="content-heading poppins">JavaScript Basic</p>
        <div className="mw-100 content-sub-heading d-flex poppins">
          <div className="w-25 content-left">
            <p className="content-text">Schedule</p>
            <Link to="/courseview" className="content-link">
              What's JavaScript
            </Link>
            <br />
            <Link to="#" className="content-link">
              JS 1.0 console.log
            </Link>
            <br />
            <Link to="#" className="content-link">
              String concatenation
            </Link>
            <br />
            <Link to="#" className="content-link">
              JS 1.2 Comment in code
            </Link>
            <br />
            <p className="content-text">Exercise</p>
            <Link to="/excerciseview" className="content-link">
              String exercise
            </Link>
            <br />
            <Link to="#" className="content-link">
              Reverse a string
            </Link>
            <br />
            <Link to="#" className="content-link">
              Math exercise
            </Link>
          </div>
          <div className="w-75 content-right">
            <p className="content-text">Exercise: String exercise</p>
            <p className="content-text1">Time: 10min | 5 questions</p>
            <p style={{ textAlign: "center" }}>
              <img src={Saly3} height="300px" />
              <br />
              <br />
            </p>
            <div className="content-bg">
              <Link className="btn poppins" to="/exercise">
                Go to exercise
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer">
        <div className="d-flex">
          <div className="col-md-4">
            <p className="footer-text1">iSchool</p>
            <p className="footer-text2">© 2023 iSchool</p>
            <p className="footer-text2">Design by Nguyen Bao Anh</p>
          </div>
          <div className="col-md-4 mw-100 d-flex">
            <ul className="w-50" style={{ listStyleType: "none" }}>
              <p className="footer-text3">Useful</p>
              <li className="footer-text2">Home</li>
              <li className="footer-text2">About us</li>
              <li className="footer-text2">Services</li>
              <li className="footer-text2">Terms</li>
              <li className="footer-text2">Privacy policy</li>
            </ul>
          </div>
          <div className="col-md-4">
            <p className="footer-text3">Join Our Newsletter</p>
            <form>
              <input className="footer-input" type="email" name="email" />
              <button className="footer-btn">Send</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExcerciseView;
