import React, { Component } from "react";
import Axios from "axios";
import "./Login.component.css";
import { withRouter } from "react-router";
import {notify} from '../../../utils/toaster';
import {handleError} from '../../../utils/errorHandler';


const BASE_URL = process.env.REACT_APP_BASE_URL;


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        username: "",
        password: "",
      },
      error: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        `${BASE_URL}/auth/login`,
        this.state.data
      );
      if (response.data.token) {
        let admin = {
          isAdmin: true,
          adminToken: response.data.token,
        };
        localStorage.setItem("admin", JSON.stringify(admin));
        notify.showSuccess('Logged in successfully');
        this.props.history.push(`/dashboard`);
      }
    } catch (error) {
       handleError(error);
      notify.showError(error)

      // if (error.response.status === 400) {
      //   console.clear();
      //   notify.showError(error)
       
      // }
    }
  };

  render() {
    return (
      <div className="login-container">
        <img src="images/image1.jpg" alt="login" />
        <div className="login-box">
          <div className="row">
            <div className="col-md-5">
              <h1>Welcome</h1>
            </div>
            <div className="col-md-7">
              <form
                className="form-group login-form"
                onSubmit={this.handleSubmit}
              >
                <h1>Login</h1>
                <label htmlFor="username">Username: </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="please enter your username"
                  name="username"
                  onChange={this.handleChange}
                />
                <br />
                <label htmlFor="password">Password: </label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="please enter your password"
                  name="password"
                  onChange={this.handleChange}
                />
                <br />
                {this.state.error && (
                  <p style={{ color: "red" }}>{this.state.error}</p>
                )}
                <button type="submit" className="login-btn">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
