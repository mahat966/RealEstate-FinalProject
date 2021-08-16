import Axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router";
import "../Dashboard/Dashboard.component.css";
import { notify } from "../../../utils/toaster";
import { handleError } from "../../../utils/errorHandler";
import { Button } from "../../common/Button.component";

const BASE_IMG_URL = process.env.REACT_APP_IMG_URL;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const defaultForm = {
  heading: "",
  description: "",
  soldBy: "",
  email: "",
  phone: "",
  location: "",
  image: "",
  price: "",
  propertyLocation: "",
  landSize: "",
  roadSize: "",
  floor: "",
  totalRooms: "",
};

class BuyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        ...defaultForm,
      },
      error: {
        ...defaultForm,
      },
      isSubmitting: false,
      isValidForm: false,
    };
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.getPropertyDetails(this.props.match.params.id);
    }
  }

  getPropertyDetails = async (propertyId) => {
    try {
      const response = await Axios.get(`${BASE_URL}/property/${propertyId}`);
      if (response.data._id) {
        this.setState({
          data: {
            heading: response.data.heading,
            description: response.data.description,
            soldBy: response.data.soldBy,
            email: response.data.email,
            phone: response.data.phone,
            location: response.data.location,
            price: response.data.price,
            propertyLocation: response.data.propertyLocation,
            landSize: response.data.landSize,
            roadSize: response.data.roadSize,
            floor: response.data.floor,
            totalRooms: response.data.totalRooms,
            image: response.data.images,
          },
        });
        console.log("data", this.state.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(
      (preState) => ({
        data: {
          ...preState.data,
          [name]: value,
        },
      }),
      () => {
        this.validateForm(name);
      }
    );
  };

  handleChangeImage = (e) => {
    this.setState({
      data: { ...this.state.data, image: e.target.files },
    });
  };

  validateForm = (fieldName) => {
    let errMsg;
    switch (fieldName) {
      case "email":
        errMsg = this.state.data[fieldName]
          ? this.state.data[fieldName].includes("@") &&
            this.state.data[fieldName].includes(".com")
            ? ""
            : 'Invalid email. Email must be like "example@example.com "'
          : "Email is required";
        break;
      default:
        break;
    }

    this.setState(
      (pre) => ({
        error: {
          ...pre.error,
          [fieldName]: errMsg,
        },
      }),
      () => {
        const errors = Object.values(this.state.error).filter((err) => err);
        this.setState({
          isValidForm: errors.length === 0,
        });
      }
    );
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      isSubmitting: true,
    });
    let admin = JSON.parse(localStorage.getItem("admin"));
    try {
      let fileData = new FormData();
      fileData.append("heading", this.state.data.heading);
      fileData.append("description", this.state.data.description);
      fileData.append("soldBy", this.state.data.soldBy);
      fileData.append("email", this.state.data.email);
      fileData.append("phone", this.state.data.phone);
      fileData.append("location", this.state.data.location);
      fileData.append("price", this.state.data.price);
      fileData.append("propertyLocation", this.state.data.propertyLocation);
      fileData.append("landSize", this.state.data.landSize);
      fileData.append("roadSize", this.state.data.roadSize);
      fileData.append("floor", this.state.data.floor);
      fileData.append("totalRooms", this.state.data.totalRooms);

      for (const key of Object.keys(this.state.data.image)) {
        fileData.append("image", this.state.data.image[key]);
      }

      if (this.props.match.params.id) {
        console.log("asdasd", this.state.data.image);
        const updateResponse = await Axios.put(
          `${BASE_URL}/property/${this.props.match.params.id}`,
          fileData,
          {
            headers: { Authorization: admin.adminToken },
          }
        );
        if (updateResponse.data._id) {
          notify.showInfo("Updated successfully");
          this.props.history.push("/viewbuyContent");
        }
      } else {
        const response = await Axios.post(`${BASE_URL}/property`, fileData, {
          headers: { Authorization: admin.adminToken },
        });
        if (response.data._id) {
          notify.showSuccess("Added successfully");
          this.props.history.push("/viewbuyContent");
        }
      }
      console.log("editting", fileData);
    } catch (error) {
      handleError(error);
    }
  };

  render() {
    return (
      <div className="content-detail">
        <h2>Property Details</h2>
        <div className="contents">
          <form
            className="form-group content-form"
            onSubmit={this.handleSubmit}
          >
            <p>Write something about this post</p>

            <label htmlFor="heading">Heading</label>
            <input
              type="text"
              name="heading"
              className="form-control"
              value={this.state.data.heading}
              onChange={this.handleChange}
              required
            />

            <label htmlFor="description">Description</label>

            <textarea
              rows="5"
              name="description"
              className="form-control"
              value={this.state.data.description}
              onChange={this.handleChange}
              required
            ></textarea>

            <h4>Seller Details</h4>

            <label htmlFor="soldBy">Sold By</label>

            <input
              type="text"
              name="soldBy"
              className="form-control"
              value={this.state.data.soldBy}
              onChange={this.handleChange}
              required
            />

            <label htmlFor="email">Email</label>

            <input
              type="text"
              name="email"
              className="form-control"
              value={this.state.data.email}
              onChange={this.handleChange}
              required
            />
            <p className="error">{this.state.error.email}</p>

            <label htmlFor="phone">Phone</label>

            <input
              type="number"
              name="phone"
              className="form-control"
              value={this.state.data.phone}
              onChange={this.handleChange}
              required
            />

            <label htmlFor="location">Location</label>

            <input
              type="text"
              name="location"
              className="form-control"
              value={this.state.data.location}
              onChange={this.handleChange}
              required
            />

            <h2>Property Details</h2>

            <label htmlFor="price">Price</label>

            <input
              type="text"
              name="price"
              className="form-control"
              value={this.state.data.price}
              onChange={this.handleChange}
              required
            />

            <label htmlFor="propertyLocation">Property Location</label>

            <input
              type="text"
              name="propertyLocation"
              className="form-control"
              value={this.state.data.propertyLocation}
              onChange={this.handleChange}
              required
            />

            <label htmlFor="landSize">Land Size</label>

            <input
              type="text"
              name="landSize"
              className="form-control"
              value={this.state.data.landSize}
              onChange={this.handleChange}
              required
            />

            <label htmlFor="roadSize">Road Size</label>

            <input
              type="text"
              name="roadSize"
              className="form-control"
              value={this.state.data.roadSize}
              onChange={this.handleChange}
              required
            />

            <label htmlFor="floor">Floor</label>

            <input
              type="text"
              name="floor"
              className="form-control"
              value={this.state.data.floor}
              onChange={this.handleChange}
              required
            />

            <label htmlFor="totalRooms">Total no. of Rooms</label>

            <input
              type="text"
              name="totalRooms"
              className="form-control"
              value={this.state.data.totalRooms}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="chooseImage">Choose Image</label>
            {this.state.data.images && (
              <img
                src={`${BASE_IMG_URL}/${this.state.data.image}`}
                alt={this.state.data.heading}
              />
            )}
            <br />
            <div className="contentWarning">
              <p className="warningColor">
                * Only 6 photos will be displayed in the buy section
              </p>
            </div>

            {this.props.match.params.id ? (
              <input
                type="file"
                onChange={this.handleChangeImage}
                multiple
                accept=".jpg, .jpeg, .png"
              />
            ) : (
              <input
                required
                type="file"
                onChange={this.handleChangeImage}
                multiple
                accept=".jpg, .jpeg, .png"
              />
            )}

            <div className="post-button">
              {/* <button type="submit" className="btn-post">
                {this.props.match.params.id ? "Update" : "Submit"}
              </button> */}

              <Button isSubmitting={this.state.isSubmitting}></Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(BuyContent);
