import React from "react";
import "./StyleLogin.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Saly1 from "../image/Saly1.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="mw-100 d-flex" style={{ height: "100%" }}>
      <div className="w-50" style={{ backgroundColor: "#1C56ED" }}>
        <p className="logo">iSchool</p>
        <h1 className="text">
          Welcome to iSchool <p>Learning platform</p>
        </h1>
        <img src={Saly1} className="img-saly1" />
      </div>
      <div className="w-50 signup-form">
        <h1>Sign up</h1>
        <p style={{ fontSize: 12 }}>
          Already have account?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            Sign in
          </Link>
        </p>
        <form onSubmit={handleSubmit}>
          <label className="label poppins">Full Name</label>
          <br />
          <input type="text" name="Name" className="input" />
          <br />
          <br />
          <label className="label poppins">Email</label>
          <br />
          <input type="email" name="Email" className="input" />
          <br />
          <br />
          <label className="label poppins">Password</label>
          <br />
          <input type="password" name="Password" className="input" />
          <br />
          <br />
          <label className="label poppins">Re-Password</label>
          <br />
          <input type="password" name="RePassword" className="input" />
          <br />
          <br />
          <input type="checkbox" name="Checkbox" />
          <span className="label poppins">
            I agreed to the Terms & Conditions
          </span>
          <br />
          <br />
          <br />
          <input type="submit" value="Sign up" className="btn-login poppins" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
