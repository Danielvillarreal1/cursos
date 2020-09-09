import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Features from "./features";
import CourseDetails from "./course-details";
const Hero = () => {
  return (
    <>
      <section
        id="hero"
        class="d-flex justify-content-center align-items-center"
      >
        <div
          class="container position-relative"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h1>
            Learning Today,
            <br />
            Leading Tomorrow
          </h1>
          <h2>
            We are team of talanted designers making websites with Bootstrap
          </h2>
          {/* <a href="courses.html" class="btn-get-started">Get Started</a> */}
          <li>
            {" "}
            <Link to="/courses" class="btn-get-started">
              Get Started
            </Link>
          </li>
        </div>
      </section>
      <CourseDetails />
      <Features />
      <Footer />
    </>
  );
};

export default Hero;
