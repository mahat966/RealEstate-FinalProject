import Axios from "axios";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../Dashboard/Dashboard.component.css";
import { notify } from '../../../utils/toaster';


const BASE_URL = process.env.REACT_APP_BASE_URL;

class ViewBuyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      isEmpty: false,
      search: ''

    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }
  componentDidMount() {
    this.getProperties();
  }

  getProperties = async () => {
    try {
      const response = await Axios.get(`${BASE_URL}/property`);


      var propertyData = response.data;
      console.log(propertyData);

      if (response.data.length !== 0) {
        this.setState({
          properties: response.data,
          isEmpty: false,
        });
      } else {
        this.setState({
          properties: [],
          isEmpty: true,
        });
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  handleDelete = async (propertyId) => {
    let admin = JSON.parse(localStorage.getItem("admin"));
    try {
      const response = await Axios.delete(
        `${BASE_URL}/property/${propertyId}`,
        {
          headers: {
            Authorization: admin.adminToken,
          },
        }
      );
      if (response.data._id) {
        this.getProperties();
        notify.showSuccess('Deleted successfully');

      }
    } catch (error) {
      console.log(error.response);
    }
  };

  render() {

    let filteredProperties = this.state.properties.filter(
      (property) => {
        return property.heading.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
      <div className="content-detail">
        <h2>Property Details</h2>
        <div className="contents">
          <Link to="/BuyContent">
            <button className="btn-post">Add item</button>
          </Link>

          <div className="searchBar">
            <label htmlFor="search">Search</label>

            <input name="search" type="text"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)} />
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>S.N</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.properties.length !== 0 &&
                filteredProperties.map((property, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td> {property.heading} </td>
                    <td>
                      <button
                        className="btn btn-info"
                        onClick={() =>
                          this.props.history.push(`/BuyContent/${property._id}`)
                        }
                      >
                        edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(property._id)}
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
                Property deleted successfully
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

export default withRouter(ViewBuyContent);
