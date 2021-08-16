import Axios from "axios";
import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import "../Dashboard/Dashboard.component.css";


const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_IMG_URL = process.env.REACT_APP_IMG_URL;


class ViewGalleryContent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      gallaries: [],
      offset: 0,
      data: [],
      perPage: 4,
      currentPage: 0 
    };

    this.handlePageClick = this
    .handlePageClick
    .bind(this);
  }


  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.getGallary()
    });

};

  componentDidMount() {
    this.getGallary();
  }

  getGallary = async () => {
    try {
      const response = await Axios.get(`${BASE_URL}/gallery`);
      console.log(response.data);

      const data = response.data;
      
      const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
 
      const postData = slice.map(pd => <React.Fragment>

                <tr>
                   <td>
                    <img
                      src={`${BASE_IMG_URL}/${pd.images[0]}`}
                      alt="No preview available"
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleDelete(pd._id)}
                      data-toggle="modal" data-target="#exampleModalCenter"
                    >
                      delete
                    </button>
                  </td>
                </tr>
       
                
    </React.Fragment>)

      if (response.data.length !== 0) {
        this.setState({
          gallaries: response.data,
          isEmpty: false,
          pageCount: Math.ceil(data.length / this.state.perPage),
          postData
        });
      } else {
        this.setState({
          gallaries: [],
          isEmpty: true,
        });
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  handleDelete = async (gallaryId) => {
    let admin = JSON.parse(localStorage.getItem("admin"));
    try {
      const response = await Axios.delete(
        `${BASE_URL}/gallery/${gallaryId}`,
        {
          headers: {
            Authorization: admin.adminToken,
          },
        }
      );
      if (response.data._id) {
        this.getGallary();
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  render() {
    return (
      <div className="content-detail">
        <h2>Gallery</h2>
        <div className="contents">
          <Link to="/galleryContent">
            <button className="btn-post">Add item</button>
          </Link>

          <br />  
      
          <table className="table">
            <thead>
              <tr>
              
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
             {this.state.postData}
            </tbody>
          </table>
        </div>
        <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
      </div>
    );
  }
}

export default ViewGalleryContent;
