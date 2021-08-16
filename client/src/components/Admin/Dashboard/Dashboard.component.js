import React from "react";
import { Link, withRouter } from "react-router-dom";
import { notify } from "../../../utils/toaster";
import "./Dashboard.component.css";

const DashboardComponent = (props) => {
  const logout = () => {
    let admin = {
      isAdmin: false,
      token: "",
    };
    // clear local storage
    localStorage.setItem("admin", JSON.stringify(admin));
    // navigate to login
    notify.showSuccess("Logged out successfully");
    props.history.push(`/admin`);
  };
  return (
    <>
      <div className="admin-header navbar" id="navbar_op">
        <div className="logo">
          <h1>Admin Panel</h1>
        </div>

        <div className="logout-container">
          <button onClick={logout} className="btn btn-success logout">
            Logout
          </button>
        </div>
      </div>

      <div className="admin-sidebar">
        <div className="sidenav">
          <Link to="/viewDesignContent">
            <i className="fa fa-book"></i>Design
          </Link>
          <Link to="/viewbuyContent">
            <i className="fa fa-money" aria-hidden="true"></i>Buy (Property)
          </Link>
          <Link to="/viewGalleryContent">
            <i className="fa fa-camera"></i>Gallery Update
          </Link>

          <Link to="/viewContact">
            <i className="fa fa-address-book"></i>Contact Data
          </Link>
        </div>
      </div>
    </>
  );
};

export const Dashboard = withRouter(DashboardComponent);
