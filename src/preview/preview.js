import React from "react";
import "./StylePreview.css";
import { Link } from "react-router-dom";
import Saly2 from "../image/Saly2.png";
import Avt from "../image/Avt.png";
import Star from "../image/star.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Preview = () => {
  return (
    <div>
      <header id="header-preview">
        <ul id="navbar-preview" className="poppins">
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
          <Link className="logout" to="/user/Login">
            Log Out
          </Link>
        </div>
      </header>

      <div id="slider-preview" className="mw-100 d-flex">
        <div className="text-bg-preview w-50">
          <h1 className="text1 poppins">JavaScript basics</h1>
          <p className="text2">
            4.3 (1385) <img src={Star} width="70px" alt="Rating" />
          </p>
          <img
            src={Avt}
            width="30px"
            style={{ marginLeft: "70px" }}
            alt="Avatar"
          />
          <span className="text3 poppins" style={{ fontWeight: 500 }}>
            Ta Dinh Tien
          </span>
          <br />
          <Link className="btn poppins" to="/courseview">
            Enroll for free
          </Link>
          <p className="text4">There are 109,879 already enrolled</p>
        </div>
        <div className="w-50">
          <img src={Saly2} width="400px" alt="Course" />
        </div>
      </div>

      <div id="content-preview">
        <div>
          <p className="content-heading-preview poppins">
            Overview of JavaScript Basic
          </p>
          <p className="content-text1">
            JavaScript ("JS" for short) is a full-fledged dynamic programming
            language that, when applied to an HTML document, can provide dynamic
            interactivity on websites. It was invented by Brendan Eich,
            co-founder of the Mozilla project, the Mozilla Foundation, and the
            Mozilla Corporation.
          </p>
          <p className="content-text1">
            JavaScript is incredibly versatile. You can start small, with
            carousels, image galleries, fluctuating layouts, and button click
            responses. With more experience, you'll be able to create games,
            animated 2D and 3D graphics, comprehensive database-driven apps, and
            much more!
          </p>
          <p className="content-text1">
            JavaScript itself is fairly compact yet very flexible. Developers
            have written a large variety of tools on top of the core JavaScript
            language, unlocking a vast amount of extra functionality with
            minimum effort. These include:
          </p>
          <ul className="poppins" style={{ fontSize: 14 }}>
            <li>
              Browser Application Programming Interfaces (APIs) — APIs built
              into web browsers, providing functionality like dynamically
              creating HTML and setting CSS styles, collecting and manipulating
              a video stream from the user's webcam, or generating 3D graphics
              and audio samples.
            </li>
            <li>
              Third-party APIs — Allow developers to incorporate functionality
              in their sites from other content providers, such as Twitter or
              Facebook.
            </li>
            <li>
              Third-party frameworks and libraries — You can apply these to your
              HTML to allow you to rapidly build up sites and applications.
              Because this course is only supposed to be a light introduction to
              JavaScript, we are not going to confuse you at this stage by
              talking in detail about what the difference is between the core
              JavaScript language and the different tools listed above. You can
              learn all that in detail later on, in our JavaScript learning
              area, and in the rest of MDN.
            </li>
          </ul>
        </div>
        <br />
        <div>
          <p className="content-heading-preview poppins">
            What will students get in the course
          </p>
          <p className="content-sub-heading-preview poppins">
            Understand the usage of C language
          </p>
          <ul className="poppins" style={{ fontSize: "14px" }}>
            <li>Know how to add libraries.</li>
            <li>Know how to declare variables.</li>
            <li>Know how to import and export data.</li>
          </ul>
          <p className="content-sub-heading-preivew poppins">
            Understand how iteration works (In C as well as other languages)
          </p>
          <ul className="poppins" style={{ fontSize: 14 }}>
            <li>For loop.</li>
            <li>While loop, do-while.</li>
          </ul>
          <p className="content-sub-heading-preivew poppins">
            Understand the basic structure of a programming language
          </p>
          <ul className="poppins" style={{ fontSize: 14 }}>
            <li>Array structure.</li>
            <li>String structure.</li>
          </ul>
          <p className="content-sub-heading-preivew poppins">
            Familiarize yourself with some basic algorithms
          </p>
          <ul className="poppins" style={{ fontSize: 14 }}>
            <li>Know how to write functions.</li>
            <li>Familiarize yourself with recursive algorithms.</li>
          </ul>
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
            <p className="footer-text2">© 2024 iSchool</p>
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

export default Preview;
