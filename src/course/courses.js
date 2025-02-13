import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StyleCourse.css";
import Course1 from "../image/Course1.png";
import Course2 from "../image/Course2.png";
import Course3 from "../image/Course3.png";

const Course = () => {
  return (
    <div>
      <header id="header">
        <ul id="navbar" className="poppins">
          <li>
            <a className="logo" style={{ color: "#1C56ED" }} href="../home/Home.html">
              iSchool
            </a>
          </li>
          <li><a href="../home/Home.html">Home</a></li>
          <li><a href="../about/About.html">About</a></li>
          <li><a style={{ color: "#1C56ED" }} href="../course/Courses.html">Courses</a></li>
          <li><a href="../contact/Contact.html">Contact</a></li>
        </ul>
        <div className="logout-btn">
          <a className="logout" href="../user/Login.html">Log Out</a>
        </div>
      </header>

      <div id="content">
        <div className="poppins">
          <p className="content-heading">Courses</p>
          <p className="content-sub-heading">
            Explore our courses and choose based on your individual goals. We are committed to providing a quality learning environment that caters to the educational needs of all our students.
          </p>
          <p className="content-text poppins">Popular Course</p>
        </div>

        <div id="course" className="poppins">
          <div className="d-flex course-list">
              <div className="col-md-4 course-item shadow-sm">
                <img src={Course1} className="course-img" alt="Course" />
                <p className="course-text1 poppins">JavaScript basics</p>
                <p className="course-text2">JavaScript is a programming language that adds interactivity to your website (for example games, responses when buttons are pressed or data).</p>
                <p className="course-text2">4.3 &nbsp;&nbsp;<img src="../image/star.png" width="50px" alt="Rating" /></p>
                <div style={{ paddingBottom: "15px" }}>
                  <img src="../image/Avt.png" width="30px" alt="Instructor" />&nbsp;&nbsp;
                  <span className="course-text2" style={{ fontWeight: 500 }}>Ta Dinh Tien</span>
                  <span style={{ float: "right", color: "#1C56ED", fontSize: "20px", fontWeight: 600 }}>Free</span>
                  <a className="btn poppins" href="../preview/Preview.html">Enroll for free</a>
                </div>
              </div>
          </div>
        </div>
      </div>

      <footer id="footer">
        <div className="d-flex">
          <div className="col-md-4">
            <p className="footer-text1">iSchool</p>
            <p className="footer-text2">You can always express your suggestions and wishes regarding our school via our email. We are happy to listen to your feedback and will do our best to improve the operation of our school.</p>
            <p className="footer-text2">© 2023 iSchool</p>
            <p className="footer-text2">Design by Nguyen Bao Anh</p>
          </div>
          <div className="col-md-4 mw-100 d-flex">
            <ul className="w-50" style={{ listStyleType: "none" }}>
              <p className="footer-text3">Useful</p>
              <li className="footer-text2">Home</li>
              <li className="footer-text2">About us</li>
              <li className="footer-text2">Services</li>
              <li className="footer-text2">Terms of service</li>
              <li className="footer-text2">Privacy policy</li>
            </ul>
            <ul className="w-50" style={{ listStyleType: "none" }}>
              <p className="footer-text3">Our Services</p>
              <li className="footer-text2">Web Design</li>
              <li className="footer-text2">Web Development</li>
              <li className="footer-text2">Product</li>
              <li className="footer-text2">Marketing</li>
              <li className="footer-text2">Graphic Design</li>
            </ul>
          </div>
          <div className="col-md-4" style={{ listStyleType: "none" }}>
            <p className="footer-text3">Join Our Newsletter</p>
            <p className="footer-text2">We'd love to connect with you! Enter your email to join our community and receive the latest updates.</p>
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

export default Course;