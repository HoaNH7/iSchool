import React from "react";
import "./StyleHome.css"; 
import { Link } from 'react-router-dom';
import Saly2 from "../image/Saly2.png";
import Avatar1 from "../image/Avt1.png";
import Avatar2 from "../image/Avt2.png";
import Avatar3 from "../image/Avt3.png";
import Menu from "../image/menu.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  return (
    <div>
      <header id="header">
        <ul id="navbar" className="poppins">
                  <li>
                  <Link to="/iSchool" style={{ color: '#1C56ED' }}>iSchool</Link>
                    </li>
                  <li><Link to="/iSchool">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/courses">Courses</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
        <div className="logout-btn">
          <a className="logout" href="/user/Login.html">
            Log Out
          </a>
        </div>
        <div id="mobile-menu" className="mobile-menu-btn">
          <a className="menu-icon" href="#">
            <img src={Menu} alt="Menu" />
          </a>
        </div>
      </header>

      <div id="slider" className="mw-100 d-flex">
        <div className="text-bg w-50">
          <h1 className="text1">Learning and</h1>
          <h1 className="text1">teaching online,</h1>
          <h1 className="text1" style={{ marginBottom: "30px" }}>
            made easy at <span className="span-text">iSchool</span>
          </h1>
          <p className="text2">Practice and learn new things with the platform iSchool</p>
          <br />
          <a className="btn-lesson poppins" href="/course/Courses.html">
            Trial lesson
          </a>
        </div>
        <div className="saly2 w-50">
          <img src={Saly2} alt="Slider Image" />
        </div>
      </div>

      <div id="content">
        <div>
          <p className="content-heading poppins">Our Success</p>
          <p className="content-sub-heading poppins">
            We have achieved great success in teaching and empowering students' language skills.
            Modern methods, flexible programs, and dedicated instructors have made it highly
            reputable, helping numerous students improve their English and reach their goals.
          </p>
        </div>
        <div className="data-list d-flex">
          <div className="col-md-3">
            <p className="data-item1">15K+</p>
            <p className="data-item2">Students</p>
          </div>
          <div className="col-md-3">
            <p className="data-item1">75%</p>
            <p className="data-item2">Total Success</p>
          </div>
          <div className="col-md-3">
            <p className="data-item1">35</p>
            <p className="data-item2">Main questions</p>
          </div>
          <div className="col-md-3">
            <p className="data-item1">26</p>
            <p className="data-item2">Chief experts</p>
          </div>
        </div>
      </div>

      <div id="background-img">
        <p className="text-img1">
          The <span className="span-img1">mission</span> of iSchool
        </p>
        <p className="text-img2" style={{ justifyContent: "center" }}>
          to provide <span className="span-img2">quality</span> education
        </p>
      </div>

      <div id="review">
        <p className="review-heading poppins">Reviews</p>
        <p className="review-sub-heading poppins">
          We suggest reading more feedback from our students.
        </p>
        <div className="avt-list">
          <div className="col-md-4 col- avt-item">
            <img src={Avatar1} alt="Avatar 1" />
            <p className="text-review shadow-sm poppins">
              “I am very satisfied with my decision to study English at iSchool. The atmosphere here is
              friendly and supportive, and the teachers have done everything possible to help me
              understand and remember difficult topics. Thanks to this, I feel significant progress in my
              English learning, and the classes are always interesting and productive.”
            </p>
          </div>
          <div className="col-md-4 avt-item">
            <img src={Avatar2} alt="Avatar 2" />
            <p className="text-review shadow-sm poppins">
              “I am very satisfied with my decision to study English at iSchool. The atmosphere here is
              friendly and supportive, and the teachers have done everything possible to help me
              understand and remember difficult topics. Thanks to this, I feel significant progress in my
              English learning, and the classes are always interesting and productive.”
            </p>
          </div>
          <div className="col-md-4 avt-item">
            <img src={Avatar3} alt="Avatar 3" />
            <p className="text-review shadow-sm poppins">
              “I am very satisfied with my decision to study English at iSchool. The atmosphere here is
              friendly and supportive, and the teachers have done everything possible to help me
              understand and remember difficult topics. Thanks to this, I feel significant progress in my
              English learning, and the classes are always interesting and productive.”
            </p>
          </div>
        </div>
      </div>

      <footer id="footer">
        <div className="d-flex mw-100">
          <div className="col-md-4">
            <p className="footer-text1">iSchool</p>
            <p className="footer-text2">© 2023 iSchool</p>
            <p className="footer-text2">Design by Nguyen Bao Anh</p>
          </div>
          <div className="col-md-4 d-flex">
            <ul className="w-50" style={{ listStyleType: "none" }}>
              <p className="footer-text3">Useful</p>
              <li className="footer-text2">Home</li>
              <li className="footer-text2">About us</li>
              <li className="footer-text2">Services</li>
              <li className="footer-text2">Terms</li>
              <li className="footer-text2">Privacy policy</li>
            </ul>
            <ul className="w-50" style={{ listStyleType: "none" }}>
              <p className="footer-text3">Our Services</p>
              <li className="footer-text2">Web Design</li>
              <li className="footer-text2">Development</li>
              <li className="footer-text2">Product</li>
              <li className="footer-text2">Marketing</li>
              <li className="footer-text2">Graphic Design</li>
            </ul>
          </div>
          <div className="col-md-4" style={{ listStyleType: "none" }}>
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

export default Home;
