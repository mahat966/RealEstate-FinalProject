import React from "react";
import "./Footer.component.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footerSection">
      <div className="footerInfo">
        <div className="row">
          <div className="col-md-3">
            <h4>Address</h4>
            <p>Balkot, Bhaktapur</p>
          </div>
          <div className="col-md-3">
            <h4>Phone</h4>
            {/* <div className = "phone">asdas</div>
                        <div className = "phone">sadas</div>
                        <div className = "phone">sadasd</div> */}
            <p>123451245 / 12312456456 </p>
          </div>
          <div className="col-md-3">
            <h4>Email</h4>
            <p>example@gmail.com</p>
          </div>
          <div className="col-md-3">
            <h4>Schedule</h4>
            <p>Sun - Fri (9 am - 5 pm)</p>
          </div>
        </div>
      </div>

      <div className="footerSocialLinks">
        <h2>STAY IN TOUCH</h2>
        <div className="fSocialLinks">
          <FaFacebookF className="footerIcons" />
          <FaTwitter className="footerIcons" />
          <FaInstagram className="footerIcons" />
        </div>
      </div>

      <div className="footerText">© All right reserved</div>
      <div className="mokshyaFooter">
        Powered By: <a href="https://www.facebook.com/">Anup Mahat</a>
      </div>
    </div>
  );
};
