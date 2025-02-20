import React from "react";
import "../about/StyleAbout.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Check from "../image/check.png";
import Avatar1 from "../image/Avt1.png";
import Avatar2 from "../image/Avt2.png";
import Avatar3 from "../image/Avt3.png";
import AboutImg from "../image/About.png";

const About = () => {
  return (
    <div>
      <header id="header-about">
        <ul id="navbar-about" className="poppins">
          <li>
            <Link to="/iSchool">iSchool</Link>
          </li>
          {/* <li>
            <Link to="/iSchool">Home</Link>
          </li> */}
          <li>
            <Link to="/about" style={{ color: "#1C56ED" }}>
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

      <div id="content-about">
        <div className="poppins">
          <p className="content-heading-about">About us</p>
          <p className="content-sub-heading-about">
            Our mission is to empower students with the necessary language
            skills and knowledge to confidently communicate and succeed in
            today's globalized world.
          </p>
        </div>
        <div className="mw-100 d-flex poppins">
          <div className="w-50">
            <div className="about-img">
              <img
                src={AboutImg}
                width="90%"
                style={{ paddingRight: 30 }}
                height={400}
              />
            </div>
          </div>
          <div className="w-50" style={{ marginRight: "60px" }}>
            <p style={{ fontWeight: 600 }}>
              Our commitment lies in shaping a brighter future for learners by
              providing effective and high-quality learning experiences.
            </p>
            <p>
              <img src={Check} width="20px" height="20px" alt="check" />
              &nbsp;&nbsp;&nbsp;Modern Teaching Methodologies
            </p>
            <p>
              <img src={Check} width="20px" height="20px" alt="check" />
              &nbsp;&nbsp;&nbsp;Dedicated and Qualified Instructors
            </p>
            <p>
              <img src={Check} width="20px" height="20px" alt="check" />
              &nbsp;&nbsp;&nbsp;Diverse and Encouraging Learning Environment
            </p>
            <p>
              <img src={Check} width="20px" height="20px" alt="check" />
              &nbsp;&nbsp;&nbsp;Measuring Success Through Student Progress
            </p>
            <p>
              <img src={Check} width="20px" height="20px" alt="check" />
              &nbsp;&nbsp;&nbsp;Community Engagement and Events
            </p>
            <p>
              <img src={Check} width="20px" height="20px" alt="check" />
              &nbsp;&nbsp;&nbsp;Flexible Learning Options
            </p>
            <p>
              We are dedicated to continuing to add value to our students and
              contributing to their comprehensive development through English
              language education. Join us in this exciting and enriching
              learning journey!
            </p>
          </div>
        </div>

        <div className="data-list-about">
          <div className="data-item-about">
            <p className="data-item1-about">
              <span className="data-sub-item1-about">15K+</span>
            </p>
            <p className="data-item2-about">Students</p>
          </div>
          <div className="data-item-about">
            <p className="data-item1-about">
              <span className="data-sub-item1-about">75%</span>
            </p>
            <p className="data-item2-about">Total Success</p>
          </div>
          <div className="data-item-about">
            <p className="data-item1-about">
              <span className="data-sub-item1-about">35</span>
            </p>
            <p className="data-item2-about">Main questions</p>
          </div>
          <div className="data-item-about">
            <p className="data-item1-about">
              <span className="data-sub-item1-about">26</span>
            </p>
            <p className="data-item2-about">Chief experts</p>
          </div>
          <div className="data-item-about">
            <p className="data-item1-about">
              <span className="data-sub-item1-about">16</span>
            </p>
            <p className="data-item2-about">Years of experience</p>
          </div>
        </div>
      </div>

      <div id="review-about">
        <p className="review-heading-about poppins">WHAT ARE THEY SAYING?</p>
        <p className="review-sub-heading-about poppins">TESTIMONIALS</p>
        <div className="d-flex avt-list-about">
          <div className="col-md-4 avt-item-about">
            <img src={Avatar1} alt="avatar 1" />
            <p className="text-review-about shadow-sm poppins">
              “I am very satisfied with my decision to study English at iSchool.
              The atmosphere here is friendly and supportive, and the teachers
              have done everything possible to help me understand and remember
              difficult topics. Thanks to this, I feel significant progress in
              my English learning, and the classes are always interesting and
              productive.”
            </p>
          </div>
          <div className="col-md-4 avt-item-about">
            <img src={Avatar2} alt="avatar 2" />
            <p className="text-review-about shadow-sm poppins">
              “I am very satisfied with my decision to study English at iSchool.
              The atmosphere here is friendly and supportive, and the teachers
              have done everything possible to help me understand and remember
              difficult topics. Thanks to this, I feel significant progress in
              my English learning, and the classes are always interesting and
              productive.”
            </p>
          </div>
          <div className="col-md-4 avt-item-about">
            <img src={Avatar3} alt="avatar 3" />
            <p className="text-review-about shadow-sm poppins">
              “I am very satisfied with my decision to study English at iSchool.
              The atmosphere here is friendly and supportive, and the teachers
              have done everything possible to help me understand and remember
              difficult topics. Thanks to this, I feel significant progress in
              my English learning, and the classes are always interesting and
              productive.”
            </p>
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

export default About;
