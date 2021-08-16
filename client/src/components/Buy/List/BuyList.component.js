import Axios from "axios";
import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import { Link, withRouter } from "react-router-dom";
import "./BuyList.component.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_IMG_URL = process.env.REACT_APP_IMG_URL;

class BuyList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      properties: [], 
      isEmpty: false,
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
        this.getProperties()
    });

};

  componentDidMount() {
    this.getProperties();
    window.scrollTo(0,500);

  }

  getProperties = async () => {
    try {
      const response = await Axios.get(`${BASE_URL}/property`);
      console.log(response.data);

      const data = response.data;
      const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
 
      const postData = slice.map(pd => <React.Fragment>
        
        
            <div className="row">
              <div className="col-md-4">
                <img
                  src={`${BASE_IMG_URL}/${pd.images[0]}`}
                  alt={pd.heading}
                />
              </div>
              <div className="col-md-8">
                <h2>{pd.heading}</h2>
                <hr />
                <p>{pd.description}</p>
                <Link to={`/properties/${pd._id}`} rel = "no-refresh">
                  <button class="btn-read-more">More Details</button>
                </Link>
              </div>
            </div>
        
                  
                
    </React.Fragment>)


      if (response.data.length !== 0) {
        this.setState({
          properties: response.data,
          isEmpty: false,
          pageCount: Math.ceil(data.length / this.state.perPage),
          postData
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

  render() {
    return (
      <div className="buy_list">
        <div className="bannerImage">
          <img src="images/property.jpg" alt="properties" />
          <div className="centerText">
            <h1>Buy Properties</h1>
          </div>
        </div>

        <div className="buyList_contents">
        {this.state.postData}
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

export default withRouter(BuyList);
