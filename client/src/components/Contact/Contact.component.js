import React from "react";
import "./Contact.component.css";
import Axios from "axios";
import { Component } from "react";
import { Button } from "../../utils/button";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const defaultForm = {
  name: "",
  phoneNumber: "",
  email: "",
  message: "",
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        ...defaultForm,
      },
      error: {
        ...defaultForm,
      },
      isSubmitting: false,
      isValidForm: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 500);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(
      (preState) => ({
        data: {
          ...preState.data,
          [name]: value,
        },
      }),
      () => {
        this.validateForm(name);
      }
    );
  };

  validateForm = (fieldName) => {
    let errMsg;
    switch (fieldName) {
      case "email":
        errMsg = this.state.data[fieldName]
          ? this.state.data[fieldName].includes("@") &&
            this.state.data[fieldName].includes(".com")
            ? ""
            : 'Invalid email. Email must be like "example@example.com "'
          : "Email is required";
        break;
      default:
        break;
    }

    this.setState(
      (pre) => ({
        error: {
          ...pre.error,
          [fieldName]: errMsg,
        },
      }),
      () => {
        const errors = Object.values(this.state.error).filter((err) => err);
        this.setState({
          isValidForm: errors.length === 0,
        });
      }
    );
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      isSubmitting: true,
    });
    e.target.reset();

    let fileData = new FormData();
    fileData.append("name", this.state.data.name);
    fileData.append("phoneNumber", this.state.data.phoneNumber);
    fileData.append("email", this.state.data.email);
    fileData.append("message", this.state.data.message);

    const response = await Axios.post(`${BASE_URL}/contact`, fileData);
    if (response.data._id) {
      this.props.history.push("/contact");
      this.setState({
        isSubmitting: false,
        isValidForm: false,
      });
    }
  };

  render() {
    return (
      <>
        <div className="contactPage">
          <h1>Contact Us</h1>

          <div className="contact-form">
            <form className="form-group" onSubmit={this.handleSubmit}>
              <div class="inputContainer">
                <i class="fa fa-user icon"> </i>
                <input
                  class="Field"
                  type="text"
                  placeholder="Name"
                  onChange={this.handleChange}
                  name="name"
                />
              </div>

              <div class="inputContainer">
                <i class="fa fa-phone icon"> </i>
                <input
                  class="Field"
                  type="text"
                  placeholder="Phone Number (+977)"
                  onChange={this.handleChange}
                  name="phoneNumber"
                />
              </div>
              <div class="inputContainer">
                <i class="fa fa-envelope icon"> </i>
                <input
                  class="Field"
                  type="text"
                  placeholder="Email"
                  onChange={this.handleChange}
                  name="email"
                />
                <p className="error">{this.state.error.email}</p>
              </div>
              <div class="inputContainer">
                <i class="fa fa-comment icon"> </i>
                <textarea
                  id="contactTextarea"
                  class="Field"
                  rows="8"
                  type="text"
                  placeholder="Message"
                  onChange={this.handleChange}
                  name="message"
                />
              </div>
              {/* <button type = "submit" className="btnSendMessage"  data-toggle="modal" data-target="#exampleModalCenter">Send Message</button> */}
              <Button
                isSubmitting={this.state.isSubmitting}
                isValidForm={this.state.isValidForm}
              ></Button>
            </form>

            <div
              class="modal fade"
              id="exampleModalCenter"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">
                      Form submission successful
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    Your request is sent successfully
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Okay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.690596957688!2d85.36529026466401!3d27.66504283280949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a08deaac20d%3A0x2c994399b80e4bda!2sBalkot%20Chowk%2C%20Anantalingeshwar%2044600!5e0!3m2!1sen!2snp!4v1628742907423!5m2!1sen!2snp"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
      </>
    );
  }
}

export default Contact;
