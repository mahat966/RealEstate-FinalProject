import Axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router";
import { notify } from "../../../utils/toaster";
import "../Dashboard/Dashboard.component.css";
import { Button } from "../../common/Button.component";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_IMG_URL = process.env.REACT_APP_IMG_URL;

const defaultForm = {
  imageType: "",
  image: "",
};

class DesignContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        ...defaultForm,
      },
      isSubmitting: false,
    };
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.getDesignDetails(this.props.match.params.id);
    }
  }

  getDesignDetails = async (designId) => {
    try {
      const response = await Axios.get(`${BASE_URL}/designItem/${designId}`);
      if (response.data._id) {
        this.setState({
          data: {
            imageType: response.data.imageType,
            image: response.data.images[0],
          },
        });
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((preState) => ({
      data: {
        ...preState.data,
        [name]: value,
      },
    }));
  };
  handleChangeImage = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        image: e.target.files[0],
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      isSubmitting: true,
    });
    let admin = JSON.parse(localStorage.getItem("admin"));
    try {
      let fileData = new FormData();
      fileData.append("imageType", this.state.data.imageType);
      fileData.append("image", this.state.data.image);
      if (this.props.match.params.id) {
        const updateResonse = await Axios.put(
          `${BASE_URL}/designItem/${this.props.match.params.id}`,
          fileData,
          {
            headers: {
              Authorization: admin.adminToken,
            },
          }
        );
        if (updateResonse.data._id) {
          notify.showInfo("Updated successfully");
          this.props.history.push(`/viewDesignContent`);
        }
      } else {
        const response = await Axios.post(`${BASE_URL}/designItem`, fileData, {
          headers: {
            Authorization: admin.adminToken,
          },
        });
        if (response.data._id) {
          notify.showSuccess("Added Successfully");
          this.props.history.push(`/viewDesignContent`);
        }
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  render() {
    return (
      <div className="content-detail">
        <h2>Designs</h2>
        <div className="contents">
          <form className="form-group" onSubmit={this.handleSubmit}>
            <h3>Insert Images</h3>
            <select
              className="form-control"
              name="imageType"
              id="imageType"
              value={this.state.data.imageType}
              onChange={this.handleChange}
              required
            >
              <option value="">Select Any One</option>
              <option value="Home Design">Home Design</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Living Room">Living Room</option>
              <option value="Bathroom">Bathroom</option>
              <option value="Bedroom">Bedroom</option>
            </select>
            <br />
            <div>Choose Image</div>

            {this.state.data.image && (
              <img
                src={`${BASE_IMG_URL}/${this.state.data.image}`}
                alt={this.state.data.imageType}
              />
            )}

            {this.props.match.params.id ? (
              <input
                type="file"
                onChange={this.handleChangeImage}
                accept=".jpg, .jpeg, .png"
              />
            ) : (
              <input
                required
                type="file"
                onChange={this.handleChangeImage}
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

export default withRouter(DesignContent);
