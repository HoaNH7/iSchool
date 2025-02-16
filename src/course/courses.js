import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./StyleCourse.css";
import { Link } from "react-router-dom";
import Course1 from "../image/Course1.png";
import Course2 from "../image/Course2.png";
import Course3 from "../image/Course3.png";
import Avatar from "../image/Avt.png";
import Star from "../image/star.png";

const Course = () => {
  return (
    <div>
      <header id="header-course">
        <ul id="navbar-course" className="poppins">
          <li>
            <Link to="/iSchool">iSchool</Link>
          </li>
          {/* <li>
            <Link to="/iSchool">Home</Link>
          </li> */}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/courses" style={{ color: "#1C56ED" }}>
              Courses
            </Link>
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

      <div id="content-course">
        <div className="poppins">
          <p className="content-heading">Courses</p>
          <p className="content-sub-heading">
            Explore our courses and choose based on your individual goals. We
            are committed to providing a quality learning environment that
            caters to the educational needs of all our students.
          </p>
          <p className="content-text poppins">Popular Course</p>
        </div>

        <div id="course-course" className="poppins">
          <div className="d-flex course-list">
            <div className="col-md-4 course-item shadow-sm">
              <img src={Course1} className="course-img" alt="Course" />
              <p className="course-text1 poppins">JavaScript basics</p>
              <p className="course-text2">
                JavaScript is a programming language that adds interactivity to
                your website.
              </p>
              <p className="course-text2">
                4.3 &nbsp;&nbsp;
                <img src={Star} width="50px" alt="Rating" />
              </p>
              <div style={{ paddingBottom: "15px" }}>
                <img src={Avatar} width="30px" alt="Instructor" />
                &nbsp;&nbsp;
                <span className="course-text2" style={{ fontWeight: 500 }}>
                  Ta Dinh Tien
                </span>
                <span
                  style={{
                    float: "right",
                    color: "#1C56ED",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  Free
                </span>
                <Link to="/preview" className="btn poppins">
                  Enroll for free
                </Link>
              </div>
            </div>
            <div className="col-md-4 course-item shadow-sm">
              <img src={Course2} className="course-img" alt="Course" />
              <p className="course-text1 poppins">HTML/CSS</p>
              <p className="course-text2">
                HTML and CSS are two core technologies used for creating and
                designing web pages.
              </p>
              <p className="course-text2">
                4.3 &nbsp;&nbsp;
                <img src={Star} width="50px" alt="Rating" />
              </p>
              <div style={{ paddingBottom: "15px" }}>
                <img src={Avatar} width="30px" alt="Instructor" />
                &nbsp;&nbsp;
                <span className="course-text2" style={{ fontWeight: 500 }}>
                  Vuong Minh Tuan
                </span>
                <span
                  style={{
                    float: "right",
                    color: "#1C56ED",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  Free
                </span>
                <Link to="/preview" className="btn poppins">
                  Enroll for free
                </Link>
              </div>
            </div>
            <div className="col-md-4 course-item shadow-sm">
              <img src={Course3} className="course-img" alt="Course" />
              <p className="course-text1 poppins">ReactJS</p>
              <p className="course-text2">
                ReactJS is a popular JavaScript library for building fast and
                interactive user interfaces.
              </p>
              <p className="course-text2">
                4.3 &nbsp;&nbsp;
                <img src={Star} width="50px" alt="Rating" />
              </p>
              <div style={{ paddingBottom: "15px" }}>
                <img src={Avatar} width="30px" alt="Instructor" />
                &nbsp;&nbsp;
                <span className="course-text2" style={{ fontWeight: 500 }}>
                  Phan Truong Lam
                </span>
                <span
                  style={{
                    float: "right",
                    color: "#1C56ED",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  Free
                </span>
                <Link to="/preview" className="btn poppins">
                  Enroll for free
                </Link>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>

        <div id="mycourse-course">
          <p className="mycourse-text">My Course</p>
          <div className="d-flex mycourse-list">
            <div className="col-md-4 mycourse-item shadow-sm">
              <img src={Course1} className="mycourse-img" />
              <p className="mycourse-text1 poppins">JavaScript basics</p>
              <p className="mycourse-text2">
                JavaScript is a programming language that adds interactivity to
                your website.
              </p>
              <p className="mycourse-text2">
                4.3 &nbsp;&nbsp;
                <img src={Star} width="50px" />
              </p>
              <div>
                <img src={Avatar} width="30px" />
                &nbsp;&nbsp;
                <span className="mycourse-text2" style={{ fontWeight: 500 }}>
                  Ta Dinh Tien
                </span>
                <span
                  style={{
                    float: "right",
                    color: "#1C56ED",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                ></span>
                <a className="btn poppins" href="#">
                  Study now
                </a>
              </div>
            </div>
            <div className="col-md-4 mycourse-item shadow-sm">
              <img src={Course2} className="mycourse-img" />
              <p className="mycourse-text1 poppins">HTML/CSS</p>
              <p className="mycourse-text2">
                HTML and CSS are two core technologies used for creating and
                designing web pages.
              </p>
              <p className="mycourse-text2">
                4.3 &nbsp;&nbsp;
                <img src={Star} width="50px" />
              </p>
              <div>
                <img src={Avatar} width="30px" />
                &nbsp;&nbsp;
                <span className="mycourse-text2" style={{ fontWeight: 500 }}>
                  Vuong Minh Tuan
                </span>
                <span
                  style={{
                    float: "right",
                    color: "#1C56ED",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                ></span>
                <a className="btn poppins" href="#">
                  Study now
                </a>
              </div>
            </div>
            <div className="col-md-4 mycourse-item shadow-sm">
              <img src={Course3} className="mycourse-img" />
              <p className="mycourse-text1 poppins">ReactJS</p>
              <p className="mycourse-text2">
                ReactJS is a popular JavaScript library for building fast and
                interactive user interfaces.
              </p>
              <p className="mycourse-text2">
                4.3 &nbsp;&nbsp;
                <img src={Star} width="50px" />
              </p>
              <div>
                <img src={Avatar} width="30px" />
                &nbsp;&nbsp;
                <span className="mycourse-text2" style={{ fontWeight: 500 }}>
                  Phan Truong Lam
                </span>
                <span
                  style={{
                    float: "right",
                    color: "#1C56ED",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                ></span>
                <a className="btn poppins" href="#">
                  Study now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="footer">
        <div className="d-flex">
          <div className="col-md-4">
            <p className="footer-text1">iSchool</p>
            <p className="footer-text2">
              You can always express your suggestions and wishes regarding our
              school via our email. We are happy to listen to your feedback and
              will do our best to improve the operation of our school.
            </p>
            <p className="footer-text2">© 2023 iSchool</p>
            <p className="footer-text2">Present by Nguyen Huu Hoa</p>
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
            <p className="footer-text2">
              We'd love to connect with you! Enter your email to join our
              community and receive the latest updates.
            </p>
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
