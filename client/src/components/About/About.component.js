import React from "react";
import "./About.component.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <div className="bannerImage">
        <img src="images/aboutus.jpg" alt="banner" />
        <div className="centerText">
          <h1>About us</h1>
        </div>
      </div>
      <section className="header-section" id="top-banner">
        <div className="center-div"></div>
      </section>
      <section className="about-company">
        <div className="row">
          <div className="col-sm-6">
            <h2>Introduction</h2>
            <p>
              Da Vinci has been a respected and trusted service provider in
              Nepal for many years. Over those years, we have developed a
              reputation for delivering projects safely, on budget, and on
              schedule. <br /> <br />
              We provide quality design and construction strategies and
              solutions to our clients using a think-straight,talk-straight,
              do-it-right-once approach with no surprises. <br /> <br />
              From small renovations to complex billion dollar projects; from
              modular construction, to advanced digital technologies, to
              cutting-edge sustainability, Da Vinci has you covered. <br />
              <br />
              We redefine full-service and bring expertise across all project
              types, at all scales and under all procurement models. As
              innovative solution providers and construction specialists, we
              leverage our expertise to customize the right approach for your
              project, maximizing value for the best price. Flexible, focused
              and innovative: we're focused on achieving your project vision and
              business goals.
            </p>

            {/* <button className="btn-read-more">Read More</button> */}
          </div>

          <div class="col-sm-6 ">
            <h2>Mission and Vision</h2>
            <h3>Mission Statement</h3>
            <p>
              To deliver high-quality, cost-effective projects on schedule by
              employing and supporting motivated, flexible, and focused teams.
              Our pledge is to establish lasting relationships with our
              customers by exceeding their expectations and gaining their trust
              through exceptional performance by every member of the
              construction team.
            </p>
            <h3>Vision Statement</h3>
            <p>
              To be the preferred contractor of choice. A company that our
              customers want to work with and our employees are proud to work
              for.
            </p>
            {/* <button className="btn-read-more">Read More</button> */}
          </div>
        </div>
      </section>
      <hr />
      <section className="meet-our-team">
        <div className="team-title">
          {/* <i className="fa fa-chevron-up" aria-hidden="true"></i> */}
          <h2>Meet Our Team</h2>
        </div>

        <div className="team-heading">
          <div className="team-profiles">
            <div className="team-profile">
              <div className="profile_bg"></div>

              <div className="profile-contents">
                <img
                  src="images/ceo.jpg"
                  class="profile-image"
                  alt="ceo-images"
                />
                <h3 className="emp-name"> Sagun Shrestha </h3>
                <p>CEO</p>
                <div className="fSocialLinks">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF className="footerIcons" />
                  </a>

                  <FaInstagram className="footerIcons" />
                </div>
              </div>
            </div>

            <div className="team-profile">
              <div className="profile_bg"></div>
              <div className="profile-contents">
                <img
                  src="images/ceo.jpg"
                  class="profile-image"
                  alt="ceo-images"
                />

                <h3 className="emp-name"> Santosh Shrestha </h3>

                <p> Chairperson </p>
                <div className="fSocialLinks">
                  <a
                    href="https://www.facebook.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaFacebookF className="footerIcons" />
                  </a>

                  <FaInstagram className="footerIcons" />
                </div>
              </div>
            </div>

            <div className="team-profile">
              <div className="profile_bg"></div>
              <div className="profile-contents">
                <img
                  src="images/ceo.jpg"
                  className="profile-image"
                  alt="ceo-images"
                />

                <h3 className="emp-name"> Anup Mahat </h3>

                <p> Senior Structural Engineer </p>
                <div className="fSocialLinks">
                  <a
                    href="https://www.facebook.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaFacebookF className="footerIcons" />
                  </a>

                  <FaInstagram className="footerIcons" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="lastSection">
        <h1>How we operate?</h1>
        <h2>Preconstruction</h2>
        <p>
          At Da Vinci, preconstruction is way more than a cost estimate. We
          develop a detailed plan to tackle all the building complexities before
          we ever put a shovel in the ground. This detailed approach to
          construction management ensures that the construction goes smoothly.
        </p>
        <h2>Design & Construction</h2>
        <p>
          At Da Vinci we use 2D and 3D (if needed) models to help our
          construction team visualize how to build the project so your
          construction project gets built correctly the first time.
        </p>
        <h2>Innovation and Technology</h2>
        <p>
          We aim to maximize efficiency by attending industry events, leveraging
          partner knowledge and adopting new systems, innovations, technology or
          equipment, which may reduce manpower or time.
        </p>
        <h2>Schedule Management</h2>
        <p>
          We aggressively manage our schedule to meet your goals. How? Our
          approach starts with good sequencing and phasing, paired with an
          honest, collaborative discussion with our trade contractors. Together,
          we reduce waste, increase efficiency, and tighten the schedule.
        </p>
        <h2>Quality Control</h2>
        <p>
          To ensure best quality and result, we have a full in-house team of
          quality control and commissioning personnel who ensure your building
          systems work right from day one.
        </p>
        <h2>Health and Safety</h2>
        <p>
          We are committed to promoting a positive health and safety culture and
          encouraging the team to live and breathe the required behaviors to
          ensure health and safety is treated as a non-negotiable value on every
          level.
        </p>
      </div>
    </div>
  );
};

export default About;
