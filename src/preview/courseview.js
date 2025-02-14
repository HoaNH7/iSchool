import React from "react";
import "./StyleCourseView.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

const CourseView = () => {
  return (
    <div>
      <header id="header-courseview">
        <ul id="navbar-courseview" className="poppins">
          <li>
            <Link className="logo" to="/ischool">
              iSchool
            </Link>
          </li>
          {/* <li>
            <Link to="/home">Home</Link>
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

      <div id="content-courseview">
        <p className="content-heading-courseview poppins">JavaScript Basic</p>
        <div className="mw-100 content-sub-heading-courseview d-flex poppins">
          <div className="w-25 content-left">
            <p className="content-text-courseview">Schedule</p>
            <Link className="content-link" style={{ color: "#1C56ED" }} to="#">
              What's JavaScript?
            </Link>
            <br />
            <Link className="content-link" to="#">
              JS 1.0 console.log
            </Link>
            <br />
            <Link className="content-link" to="#">
              String concatenation
            </Link>
            <br />
            <Link className="content-link" to="#">
              JS 1.2 Comment in code
            </Link>
            <br />
            <br />
            <p className="content-text-courseview">Exercise</p>
            <Link className="content-link" to="/excerciseview">
              String exercise
            </Link>
            <br />
            <Link className="content-link" to="#">
              Reverse a string
            </Link>
            <br />
            <Link className="content-link" to="#">
              Math exercise
            </Link>
          </div>
          <div className="w-75 content-right poppins">
            <p className="content-text-courseview">What's JavaScript?</p>
            <video width="873px" height="500px" controls>
              <source
                src={`${process.env.PUBLIC_URL}/video.mp4`}
                type="video/mp4"
              />
            </video>
            <br />
            <br />
            <p className="content-text-courseview">What is JavaScript?</p>
            <p>
              avaScript is the most popular and widely used client-side
              scripting language. Client-side scripting refers to scripts that
              run within your web browser. JavaScript is designed to add
              interactivity and dynamic effects to the web pages by manipulating
              the content returned from a web server. JavaScript is an
              object-oriented language, and it also has some similarities in
              syntax to Java programming language. But, JavaScript is not
              related to Java in any way.
            </p>
            <p className="content-text-courseview">Why Study JavaScript?</p>
            <p>
              JavaScript is one of the 3 languages all web developers must
              learn:
              <br />
              <ul>
                <li>HTML to define the content of web pages</li>
                <li>CSS to specify the layout of web pages</li>
                <li>JavaScript to program the behavior of web pages</li>
              </ul>
              Web pages are not the only place where JavaScript is used. Many
              desktop and server programs use JavaScript. Node.js is the best
              known. Some databases, like MongoDB and CouchDB, also use
              JavaScript as their programming language.
            </p>
            <p className="content-text-courseview">
              What You Can Do with JavaScript?
            </p>
            <p>
              There are lot more things you can do with JavaScript.
              <ul>
                <li>
                  You can modify the content of a web page by adding or removing
                  elements.
                </li>
                <li>
                  You can change the style and position of the elements on a web
                  page.
                </li>
                <li>
                  You can monitor events like mouse click, hover, etc. and react
                  to it.
                </li>
                <li>You can perform and control transitions and animations.</li>
              </ul>
              The list does not end here, there are many other interesting
              things that you can do with JavaScript. You will learn about all
              of them in detail in upcoming chapters.
            </p>
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

export default CourseView;
