import React, { Component } from "react";
import "./Home.component.css";
import CarouselPage from "../Carousel/Carousel.component";
import Axios from "axios";
import { Link } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_IMG_URL = process.env.REACT_APP_IMG_URL;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whyChooseUsInfo: [
        {
          id: 1,
          image: "images/webuildquality.png",
          heading: "We serve quality",
          info: `Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
        {
          id: 2,
          image: "images/webuildtrust.png",
          heading: "We build trust",
          info: `    Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been 
          standard dummy text ever since the 1500s,  versions of Lorem Ipsum.`,
        },
        {
          id: 3,
          image: "images/webuildcommitment.png",
          heading: "We build commitment",
          info: `Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text`,
        },
        {
          id: 4,
          image: "images/webuildteams.png",
          heading: "We build teams",
          info: `    Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dth desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
      ],
      featuredWork: [],
      news: [],
      properties: [],
    };
  }

  componentDidMount() {
    this.getFeaturedWork();
    this.getNewsContent();
    this.getPropertyContent();
  }

  getFeaturedWork = async () => {
    try {
      const response = await Axios.get(`${BASE_URL}/featuredWork`);
      console.log(response.data);
      if (response.data.length !== 0) {
        this.setState({
          featuredWork: response.data,
          isEmpty: false,
        });
      } else {
        this.setState({
          featuredWork: [],
          isEmpty: true,
        });
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  getNewsContent = async () => {
    try {
      const response = await Axios.get(`${BASE_URL}/news`);
      if (response.data.length !== 0) {
        this.setState({
          news: response.data,
          isEmpty: false,
        });
      } else {
        this.setState({
          news: [],
          isEmpty: true,
        });
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  getPropertyContent = async () => {
    try {
      const response = await Axios.get(`${BASE_URL}/property`);
      if (response.data.length !== 0) {
        this.setState({
          properties: response.data,
          isEmpty: false,
        });
        console.log("property", response.data);
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
      <>
        <div className="bannerImage">
          <CarouselPage />

          <div className="centerText">
            <h1>Commercial and Business Area</h1>
          </div>
        </div>
        <div className="home-container">
          <div className="introduction">
            <h1>WELCOME TO our company</h1>
            <div className="row">
              <div className="col-sm-7">
                <p>
                  <br />
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. <br />{" "}
                  <br />
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  agencies. <br /> <br />
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum <br />
                </p>
              </div>

              <div className="col-sm-5">
                <img id="myImg" src="images/intro.png" alt="Home" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-wcu">
          <div className="whyChooseUs">
            <h1>Why Choose Us</h1>
            <p>
              printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also
              the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum
            </p>
            <div className="row">
              {this.state.whyChooseUsInfo.map((data, index) => (
                <div className="col-md-3" key={index}>
                  <div className="wcu-outline">
                    <img src={data.image} alt={data.heading} />
                  </div>
                  <h5>{data.heading}</h5>
                  <p>{data.info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
