import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo mr-auto">
            <a href="index.html">Enve Labs</a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo  */}
          {/* <a href="index.html" className="logo mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              {/* <li className="active"><a href="index.html">Home</a></li> */}
              <li>
                {" "}
                <Link to="/home">Home</Link>
              </li>
              {/* <li><a href="about.html">About</a></li> */}
              <li>
                {" "}
                <Link to="/about">About</Link>
              </li>

              <li>
                {" "}
                <Link to="/courses">Courses</Link>
              </li>

              <li>
                {" "}
                <Link to="/trainers">Trainers</Link>
              </li>

              <li>
                {" "}
                <Link to="/events">Events</Link>
              </li>

              <li>
                {" "}
                <Link to="/pricing">Pricing</Link>
              </li>
              {/* <li className="drop-down"><a href="">Drop Down</a> */}
              {/* <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="drop-down"><a href="#">Deep Drop Down</a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul> */}
              {/* </li> */}
              {/* <li><a href="contact.html">Contact</a></li> */}
              <li>
                {" "}
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* <a href="courses.html" className="get-started-btn">Get Started</a> */}
          <li>
            {" "}
            <Link to="/courses" className="get-started-btn">
              Get Started
            </Link>
          </li>
        </div>
      </header>
    </>
  );
};

export default Home;
