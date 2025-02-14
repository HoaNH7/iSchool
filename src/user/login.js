import React from "react";
import "./StyleLogin.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Saly1 from "../image/Saly1.png";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/ischool");
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
        <h1 style={{ fontFamily: "Unbounded" }}>Sign in</h1>
        <p style={{ fontFamily: "Unbounded", fontSize: 12 }}>
          Don't have an account{" "}
          <Link to="/signup" style={{ textDecoration: "none" }}>
            Sign up
          </Link>
        </p>

        <form onSubmit={handleSubmit}>
          <label className="label">Email</label>
          <br />
          <input type="email" name="Email" id="email" className="input" />
          <br />
          <br />
          <label class="label poppins">Password</label>
          <br />
          <input type="password" name="Password" id="password" class="input" />
          <br />
          <br />
          <input type="checkbox" name="Checkbox" />
          <span class="label poppins">Remember me</span>
          <br />
          <br />
          <br />
          <input type="submit" value="Login" class="btn-login poppins" />
        </form>
      </div>
    </div>
  );
};

export default Login;
