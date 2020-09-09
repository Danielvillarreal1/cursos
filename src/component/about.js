import React from "react";
import testimonials1 from "../img/testimonials/testimonials1.jpg";
import testimonials2 from "../img/testimonials/testimonials2.jpg";
import testimonials3 from "../img/testimonials/testimonials3.jpg";
import testimonials4 from "../img/testimonials/testimonials4.jpg";
import testimonials5 from "../img/testimonials/testimonials5.jpg";
const About = () => {
  return (
    <>
      <main id="main">
        <div className="breadcrumbs" data-aos="fade-in">
          <div className="container">
            <h2>About Us</h2>
            <p>
              Est dolorum ut non facere possimus quibusdam eligendi voluptatem.
              Quia id aut similique quia voluptas sit quaerat debitis. Rerum
              omnis ipsam aperiam consequatur laboriosam nemo harum praesentium.{" "}
            </p>
          </div>
        </div>

        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div
                className="col-lg-6 order-1 order-lg-2"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h3>
                <p className="font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="icofont-check-circled"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i> Duis aute irure
                    dolor in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate trideta storacalaperda
                    mastiro dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="counts" className="counts section-bg">
          <div className="container">
            <div className="row counters">
              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">1232</span>
                <p>Students</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">64</span>
                <p>Courses</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">42</span>
                <p>Events</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">15</span>
                <p>Trainers</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Testimonials</h2>
              <p>What are they saying</p>
            </div>

            <div
              className="owl-carousel testimonials-carousel"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src={testimonials1} className="testimonial-img" alt="" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src={testimonials2} className="testimonial-img" alt="" />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse
                    labore quem cillum quid cillum eram malis quorum velit fore
                    eram velit sunt aliqua noster fugiat irure amet legam anim
                    culpa.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src={testimonials3} className="testimonial-img" alt="" />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Enim nisi quem export duis labore cillum quae magna enim
                    sint quorum nulla quem veniam duis minim tempor labore quem
                    eram duis noster aute amet eram fore quis sint minim.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src={testimonials4} className="testimonial-img" alt="" />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                    multos export minim fugiat minim velit minim dolor enim duis
                    veniam ipsum anim magna sunt elit fore quem dolore labore
                    illum veniam.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src={testimonials5} className="testimonial-img" alt="" />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Quis quorum aliqua sint quem legam fore sunt eram irure
                    aliqua veniam tempor noster veniam enim culpa labore duis
                    sunt culpa nulla illum cillum fugiat legam esse veniam culpa
                    fore nisi cillum quid.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
