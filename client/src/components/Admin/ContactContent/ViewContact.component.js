import Axios from "axios";
import React, { Component } from "react";
import "../Dashboard/Dashboard.component.css";
import {notify} from '../../../utils/toaster';



const BASE_URL = process.env.REACT_APP_BASE_URL;

class viewContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      isEmpty: false,
      search: ''
    };
  }
  updateSearch(event){
    this.setState({search: event.target.value.substr(0,20)});
  }

  componentDidMount() {
    this.getContact();
  }

  getContact = async () => {
    try {
      const response = await Axios.get(
        `${BASE_URL}/contact`
      );
      console.log(response.data);
      if (response.data.length !== 0) {
        this.setState({
          contact: response.data,
          isEmpty: false,
        });
      } else {
        this.setState({
          contact: [],
          isEmpty: true,
        });
      }
    } catch (error) {}
  };

  handleDelete = async (contactId) => {
    let admin = JSON.parse(localStorage.getItem("admin"));
    try {
      const response = await Axios.delete(
        `${BASE_URL}/contact/${contactId}`,
        {
          headers: {
            Authorization: admin.adminToken,
          },
        }
      );
      if (response.data._id) {
        notify.showSuccess('Deleted successfully');
        this.getContact();
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  render() {
    let filteredcontact = this.state.contact.filter(
      (contact) => {
        return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div className="content-detail">
        <h2>Contact Us Details</h2>
        <div className="contents">
        
          <div className = "searchBar">
          <label htmlFor = "search">Search</label>
        
        <input name = "search" type = "text"
        value = {this.state.search} 
        onChange = {this.updateSearch.bind(this)} />
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>S.N</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Action</th>   
              </tr>
            </thead>
            <tbody>
              {this.state.contact.length !== 0 &&
                filteredcontact.map((contact, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td> {contact.name} </td>
                    <td> {contact.email} </td>
                    <td> {contact.phoneNumber} </td>

                    
                    <td>
                      <button
                        className="btn btn-info"
                        onClick={() =>
                          this.props.history.push(
                            `/contact/${contact._id}`
                          )
                        }
                      >
                        View
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(contact._id)}
                        data-toggle="modal" data-target="#exampleModalCenter"
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Form submission successful</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Data deleted successfully
                  </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" target="_top">Okay</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default viewContact;
