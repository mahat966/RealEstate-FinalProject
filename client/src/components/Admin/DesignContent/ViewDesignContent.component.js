import Axios from "axios";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../Dashboard/Dashboard.component.css";
import {notify} from '../../../utils/toaster';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_IMG_URL = process.env.REACT_APP_IMG_URL;

class ViewDesignContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designs: [],
      search:''
    };
  }

  updateSearch(event){
    this.setState({search: event.target.value.substr(0,20)});
  }

  componentDidMount() {
    this.getDesignImages();
  }


  getDesignImages = async () => {
    try {
      const response = await Axios.get(`${BASE_URL}/designItem`);
      if (response.data.length !== 0) {
        this.setState({
          designs: response.data,
          isEmpty: false,
        });
      } else {
        this.setState({
          designs: [],
          isEmpty: true,
        });
      }
      console.log(response.data)
    } catch (error) {}
  };

  handleDelete = async (designId) => {
    let admin = JSON.parse(localStorage.getItem("admin"));
    try {
      const response = await Axios.delete(
        `${BASE_URL}/designItem/${designId}`,
        {
          headers: {
            Authorization: admin.adminToken,
          },
        }
      );
      if (response.data._id) {
        this.getDesignImages();
        notify.showSuccess('Deleted Successfully');
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  render() {

    let filteredDesigns = this.state.designs.filter(
      (design) => {
        return design.imageType.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div className="content-detail">
        <h2>Designs</h2>
        <div className="contents">
          <Link to="/designContent">
            <button className="btn-post">Add item</button>
          </Link>
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
                <th>Image</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDesigns.map((design, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={`${BASE_IMG_URL}/${design.images[0]}`}
                      alt={design.imageType}
                    />
                  </td>
                  <td>{design.imageType}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() =>
                        this.props.history.push(`/designContent/${design._id}`)
                      }
                    >
                      edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleDelete(design._id)}
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
      
      </div>
    );
  }
}

export default withRouter(ViewDesignContent);
