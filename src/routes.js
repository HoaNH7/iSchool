import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/home";
import About from "./about/about";
import Courses from "./course/courses";
import Contact from "./contact/contact";
import Preview from "./preview/preview";
import CourseView from "./preview/courseview";
import ExcerciseView from "./excercise/exerciseView";
import Exercise from "./excercise/exercise";
import Login from "./user/login";
import SignUp from "./user/signup";

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/iSchool" element={<Home />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/courseview" element={<CourseView />} />
        <Route path="/excerciseview" element={<ExcerciseView />} />
        <Route path="/exercise" element={<Exercise />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
