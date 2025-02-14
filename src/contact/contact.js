import React from "react";
import "./StyleContact.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  return (
    <div>
      <header id="header-contact">
        <ul id="navbar-contact" className="poppins">
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
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/contact" style={{ color: "#1C56ED" }}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="logout-btn">
          <Link className="logout" to="/login">
            Log Out
          </Link>
        </div>
      </header>
      <div id="content-contact">
        <div className="poppins">
          <p className="content-heading">Contacts</p>
          <p className="content-sub-heading">
            Get in touch today for us to have the opportunity to serve and
            support you in achieving your learning goals.
          </p>
          <form className="content-form" name="myForm">
            <div className="mw-100 d-flex">
              <div className="input-name">
                <div className="w-50">
                  <label className="label poppins">Your Name</label>
                  <br />
                  <input type="text" name="Name" className="input" />
                  <br />
                  <br />
                </div>
                <div className="w-50">
                  <label className="label poppins">Email</label>
                  <br />
                  <input type="text" name="Email" className="input" />
                  <br />
                  <br />
                </div>
              </div>
            </div>
            <label className="label poppins">Subject</label>
            <br />
            <input type="text" name="Subject" className="input1" />
            <br />
            <br />
            <label className="label poppins">Message</label>
            <br />
            <textarea
              cols="98.5"
              rows="3"
              name="Message"
              className="input3"
            ></textarea>
            <br />
            <br />
            <br />
            <input type="submit" value="Send" className="btn-about poppins" />
          </form>
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

export default Contact;
