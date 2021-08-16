import Axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router";
import "../Dashboard/Dashboard.component.css";


const BASE_URL = process.env.REACT_APP_BASE_URL;

class ContactContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
              name: "",
              phoneNumber: "",
              email: "",
              message: ""            
            },
        };
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.getContactDetails(this.props.match.params.id);
        }
    }

    getContactDetails = async (projectId) => {
        try {
            const response = await Axios.get(
                `${BASE_URL}/contact/${projectId}`
            );
            console.log(response.data);
            if (response.data._id) {
                this.setState({
                    data: {
                        name: response.data.name,
                        email: response.data.email,
                        phoneNumber: response.data.phoneNumber,
                        message: response.data.message,
                                          
                    },
                });
            }
        } catch (error) {
            console.log(error.response);
        }
    };

    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value,
            },
        });
    };

   

     render() {
        return (
            <div className="content-detail">
                <h2>Contact Us Details</h2>
                <div className="contents">
                    <div className = "career-bg">
                        <h4>Full Name</h4>
                    {this.state.data.name}

                        <h4>Email</h4>
                        {this.state.data.email}
                        <h4>Phone Number</h4>
                        {this.state.data.phoneNumber}
                        <h4>Message</h4>
                        {this.state.data.message}
                      
                    </div>





                </div>
            </div>
        );
    }
}

export default withRouter(ContactContent);
