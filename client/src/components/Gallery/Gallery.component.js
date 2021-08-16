import Axios from "axios";
import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import "./Gallery.component.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_IMG_URL = process.env.REACT_APP_IMG_URL;


class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { gallaries: [], 
      offset: 0,
      data: [],
      perPage: 6,
      currentPage: 0 };

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
    window.scrollTo(0,500);

  }

  getGallary = async () => {
    try {
      const response = await Axios.get(`${BASE_URL}/gallery`);

      const data = response.data;
      const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
 
      const postData = slice.map(pd => <React.Fragment>
       
              <div className="col-md-4">
                <img
                  src={`${BASE_IMG_URL}/${pd.images[0]}`}
                  alt="No preview available"
                />
              </div>
          
    </React.Fragment>)


      console.log(response.data);
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


  render() {
    return (
      <div className="gallery">
        <div className="bannerImage">
          <img src="images/image1.jpg" alt="Gallary" />
          <div className="centerText">
            <h1>Gallery</h1>
          </div>
        </div>

        <div className="galleryImages">
          <div className="row">
          {this.state.postData}
          </div>

        </div>

<div className = "paginate-container">
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
        
       
      </div>
    );
  }
}

export default Gallery;
