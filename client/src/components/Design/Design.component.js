import Axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Design.component.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_IMG_URL = process.env.REACT_APP_IMG_URL;

class Design extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designImages: [],
    };
  }

  componentDidMount() {
    this.getDesignImages();
    window.scrollTo(0, 500);
  }

  getDesignImages = async () => {
    try {
      const response = await Axios.get(`${BASE_URL}/designItem`);
      if (response.data.length !== 0) {
        this.setState({
          designImages: response.data,
          isEmpty: false,
        });
      } else {
        this.setState({
          designImages: [],
          isEmpty: true,
        });
      }
    } catch (error) {}
  };

  render() {
    let homeDesignFilter = this.state.designImages.filter(
      (filter) => filter.imageType.indexOf("Home Design") !== -1
    );
    let kitchenFilter = this.state.designImages.filter(
      (filter) => filter.imageType.indexOf("Kitchen") !== -1
    );
    let livingRoomFilter = this.state.designImages.filter(
      (filter) => filter.imageType.indexOf("Living Room") !== -1
    );
    let bathroomFilter = this.state.designImages.filter(
      (filter) => filter.imageType.indexOf("Bathroom") !== -1
    );
    let bedroomFilter = this.state.designImages.filter(
      (filter) => filter.imageType.indexOf("Bedroom") !== -1
    );

    return (
      <>
        <div className="bannerImage">
          <img src="images/contact.jpg" alt="Design" />
          <div className="centerText">
            <h1>Our Designs</h1>
          </div>
        </div>

        <div className="designPage">
          <div className="designImages">
            <div className="container">
              <h2>Home Designs</h2>

              <div className="row">
                {homeDesignFilter.slice(0, 3).map((data, index) => (
                  <div className="col-md-4">
                    <div key={index}>
                      <img
                        src={`${BASE_IMG_URL}/${data.images[0]}`}
                        alt="Home Design"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/homeDesign">
                <button className="btn-read-more">View More</button>
              </Link>
            </div>

            <div className="container">
              <h2>Kitchen</h2>
              <div className="row">
                {kitchenFilter.slice(0, 3).map((data, index) => (
                  <div className="col-md-4">
                    <div key={index}>
                      <img
                        src={`${BASE_IMG_URL}/${data.images[0]}`}
                        alt="Kitchen Design"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/kitchenDesign">
                <button className="btn-read-more">View More</button>
              </Link>
            </div>

            <div className="container">
              <h2>Living Room</h2>
              <div className="row">
                {livingRoomFilter.slice(0, 3).map((data, index) => (
                  <div className="col-md-4">
                    <div key={index}>
                      <img
                        src={`${BASE_IMG_URL}/${data.images[0]}`}
                        alt="Living room Design"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/livingRoomDesign">
                <button className="btn-read-more">View More</button>
              </Link>
            </div>

            <div className="container">
              <h2>Bedroom</h2>
              <div className="row">
                {bedroomFilter.slice(0, 3).map((data, index) => (
                  <div className="col-md-4">
                    <div key={index}>
                      <img
                        src={`${BASE_IMG_URL}/${data.images[0]}`}
                        alt="Bathroom Design"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/bedroomDesign">
                <button className="btn-read-more">View More</button>
              </Link>
            </div>

            <div className="container">
              <h2>Bathroom</h2>

              <div className="row">
                {bathroomFilter.slice(0, 3).map((data, index) => (
                  <div className="col-md-4">
                    <div key={index}>
                      <img
                        src={`${BASE_IMG_URL}/${data.images[0]}`}
                        alt="Bathroom Design"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/bathroomDesign">
                <button className="btn-read-more">View More</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Design;
