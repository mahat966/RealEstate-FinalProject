import React, { Component } from "react";
import Axios from "axios";
import "./Properties.component.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_IMG_URL = process.env.REACT_APP_IMG_URL;

class Properties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyDetails: {},
      images: [],
    };
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.getPropertyDetails(this.props.match.params.id);
    }
    window.scrollTo(0, 500);
  }

  getPropertyDetails = async (propertyId) => {
    try {
      const response = await Axios.get(`${BASE_URL}/property/${propertyId}`);
      if (response.data._id) {
        this.setState({
          propertyDetails: response.data,
          images: response.data.images,
        });
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  render() {
    const { propertyDetails } = this.state;
    return (
      <div className="buy_properties">
        {/* <div className="bannerImage">
          <img src="/images/property.jpg" alt="Properties" />
          <div className="centerText">
            <h1>Buy Properties</h1>
          </div>
        </div> */}
        {propertyDetails && (
          <div className="properties_contents">
            <h1>{propertyDetails.heading}</h1>
            <hr />

            <div className="property_left">
              <p>{propertyDetails.description}</p>
            </div>
            <div className="property_right">
              <div className="details_box">
                <div className="details_heading_color"></div>
                <div className="details_heading">Seller Details</div>
                <p>Sold by: {propertyDetails.soldBy}</p>
                <p>Email: {propertyDetails.email}</p>
                <p>Phone No.: {propertyDetails.phone}</p>
                <p>Location: {propertyDetails.location}</p>
              </div>

              <div className="details_box">
                <div className="details_heading_color"></div>
                <div className="details_heading">Pricing Details</div>
                <p>Price: {propertyDetails.price}</p>
              </div>
              <div className="details_box">
                <div className="details_heading_color"></div>
                <div className="details_heading">Property Details</div>
                <p>Property Location: {propertyDetails.propertyLocation}</p>
                <p>Land Size: {propertyDetails.landSize} </p>
                <p>Road Size: {propertyDetails.roadSize} </p>
                <p>Floor: {propertyDetails.floor}</p>
                <p>Total Rooms: {propertyDetails.totalRooms}</p>
              </div>
            </div>
            <br />
          </div>
        )}

        <div className="buttom-image">
          <div className="row">
            {this.state.images.slice(0, 6).map((data, index) => (
              <div className="col-md-4">
                <img
                  src={`${BASE_IMG_URL}/${this.state.images[index]}`}
                  alt={propertyDetails.heading}
                  width="100%"
                  height="350px"
                />
              </div>
            ))}

            {/* <div className ="col-md-4">
              <img src={`${BASE_IMG_URL}/${this.state.images[1]}`} width="100%" alt={propertyDetails.heading} />

              </div>
              <div className = "col-md-4">
              <img src={`${BASE_IMG_URL}/${this.state.images[2]}`} width="100%" alt={propertyDetails.heading} />

              </div>
              <div className = "col-md-4">
              <img src={`${BASE_IMG_URL}/${this.state.images[3]}`} width="100%" alt={propertyDetails.heading} />
                
                </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Properties;
