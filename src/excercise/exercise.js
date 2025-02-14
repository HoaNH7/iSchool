import React from "react";
import "./StyleExercise.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Vector from "../image/Vector.png";

const Exercise = () => {
  return (
    <div>
      <header id="header-exercise">
        <ul id="navbar-exercise">
          <li>
            <Link to="/exerciseview">
              <img src={Vector} />
            </Link>
          </li>
          <li className="header-text">Exercise: String Exercise</li>
        </ul>
        <div className="time">
          <p>10:00 | 5 questions</p>
        </div>
      </header>

      <div id="content-exercise">
        <form>
          <ol>
            <li className="question">
              {" "}
              Variable names beginning with underscore is not encouraged. Why?
            </li>
            <br />
            <input type="radio" name="answer1" id="a1" />
            <label>It is not standardized</label>
            <br />
            <input type="radio" name="answer1" id="b1" />
            <label>
              To avoid conflicts since assemblers and loaders use such names
            </label>
            <br />
            <input type="radio" name="answer1" id="c1" />
            <label>
              To avoid conflicts since library routines use such names
            </label>
            <br />
            <input type="radio" name="answer1" id="d1" />
            <label>
              To avoid conflicts since library routines use such names
            </label>
            <br />
            <br />
            <li className="question">
              {" "}
              Variable name resolving (number of significant characters for
              uniqueness of variable) depends on
            </li>
            <br />
            <input type="radio" name="answer2" id="a2" />
            <label>Compiler and linker implementations</label>
            <br />
            <input type="radio" name="answer2" id="b2" />
            <label>Assemblers and loaders implementations</label>
            <br />
            <input type="radio" name="answer2" id="c2" />
            <label>C language</label>
            <br />
            <input type="radio" name="answer2" id="d2" />
            <label>None</label>
            <br />
            <br />
            <li className="question">
              {" "}
              Which of the following is true for variable names in C?
            </li>
            <br />
            <input type="radio" name="answer3" id="a3" />
            <label>
              They can contain alphanumeric characters as well as special
              characters
            </label>
            <br />
            <input type="radio" name="answer3" id="b3" />
            <label>
              It is not an error to declare a variable to be one of the
              keywords(like goto, static)
            </label>
            <br />
            <input type="radio" name="answer3" id="c3" />
            <label>Variable names cannot start with a digit</label>
            <br />
            <input type="radio" name="answer3" id="d3" />
            <label>Variable can be of any length</label>
            <br />
            <br />
            <li className="question"> Which is valid C expression?</li>
            <br />
            <input type="radio" name="answer4" id="a4" />
            <label>int my_num = 100,000;</label>
            <br />
            <input type="radio" name="answer4" id="b4" />
            <label>int my_num = 100000;</label>
            <br />
            <input type="radio" name="answer4" id="c4" />
            <label>int my num = 1000;</label>
            <br />
            <input type="radio" name="answer4" id="d4" />
            <label>int $my_num = 10000;</label>
            <br />
            <br />
            <li className="question"> What is short int in C programming?</li>
            <br />
            <input type="radio" name="answer5" id="a5" />
            <label>Basic datatype of C</label>
            <br />
            <input type="radio" name="answer5" id="b5" />
            <label>Qualifier</label>
            <br />
            <input type="radio" name="answer5" id="c5" />
            <label>Short is the qualifier and int is the basic datatype</label>
            <br />
            <input type="radio" name="answer5" id="d5" />
            <label>All of the mentioned</label>
          </ol>
          <Link className="btn poppins" to="/excerciseview">
            Submit
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Exercise;
