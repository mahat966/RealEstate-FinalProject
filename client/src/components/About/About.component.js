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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              <br /> <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. <br />
              <br />
            </p>

            {/* <button className="btn-read-more">Read More</button> */}
          </div>

          <div class="col-sm-6 ">
            <h2>Mission and Vision</h2>
            <h3>Mission Statement</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <h3>Vision Statement</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
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
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
  );
};

export default About;
