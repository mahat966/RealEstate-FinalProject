import Axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../Design.component.css";
import ReactPaginate from "react-paginate";


const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_IMG_URL = process.env.REACT_APP_IMG_URL;


class LivingRoomDesign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designImages: [],
      offset: 0,
      data: [],
      perPage: 6,
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
      this.getDesignImages()
    });

  };

  componentDidMount() {
    this.getDesignImages();
    window.scrollTo(0,300);
  }

  getDesignImages = async () => {
    try {
      const response = await Axios.get(`${BASE_URL}/designItem`);

      const data = response.data;

      let livingRoomFilter = data.filter(
        (filter) => filter.imageType.indexOf("Living Room") !== -1
      );

      const slice = livingRoomFilter.slice(this.state.offset, this.state.offset + this.state.perPage)

      const postData = slice.map(pd => <React.Fragment>


        <div className="col-md-4">
       
            <img
              src={`${BASE_IMG_URL}/${pd.images[0]}`}
              alt="livingRoom Design"
            />
         
        </div>


      </React.Fragment>)

      if (response.data.length !== 0) {
        this.setState({
          designImages: response.data,
          isEmpty: false,
          pageCount: Math.ceil(livingRoomFilter.length / this.state.perPage),
          postData
        });
      } else {
        this.setState({
          designImages: [],
          isEmpty: true,
        });
      }
    } catch (error) { }
  };

  render() {

    return (
      <>
        <div className="bannerImage">
          <img src="images/contact.jpg" alt="Design" />
          <div className="centerText">
            <h1>Our Designs</h1>
          </div>
        </div>

        <div className="designPage">
          <Link to="/design">
            <button className="btn-read-more">Back to Designs</button>

          </Link>

          <div className="designImages">
            <div className="container">
              <h2>livingRoom Designs</h2>

              <div className="row">

                {this.state.postData}


              </div>

              <div className="paginate-container">
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
                  activeClassName={"active"} />
              </div>
            </div>



          </div>
        </div>
      </>
    );
  }
}

export default LivingRoomDesign;