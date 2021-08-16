import Axios from "axios";
import React, { Component } from "react";
import "../Dashboard/Dashboard.component.css";
import { notify } from '../../../utils/toaster';
import {Button} from '../../common/Button.component';

const BASE_URL = process.env.REACT_APP_BASE_URL;

class GalleryContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: "",
    };
  }

  handleChangeImage = (e) => {
    this.setState({
      data: { ...this.state.data, images: e.target.files[0] },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      isSubmitting: true
    })
    let admin = JSON.parse(localStorage.getItem("admin"));
    try {
      let fileData = new FormData();
      fileData.append("image", this.state.data.images);
      if (this.props.match.params.id) {
        const updateResponse = await Axios.put(
          `${BASE_URL}/gallery/${this.props.match.params.id}`,
          fileData,
          {
            headers: { Authorization: admin.adminToken },
          }
        );
        if (updateResponse.data._id) {
notify.showInfo('Updated successfully');
this.props.history.push("/viewGalleryContent");
        }
      } else {
        const response = await Axios.post(
          `${BASE_URL}/gallery`,
          fileData,
          {
            headers: { Authorization: admin.adminToken },
          }
        );
        if (response.data._id) {
          notify.showSuccess('Added Successfully');
          this.props.history.push("/viewGalleryContent");
        }
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  render() {
    return (
      <div className="content-detail">
        <h2>Gallery Updates</h2>
        <div className="contents">
          <form className="form-group" onSubmit={this.handleSubmit}>
            <h3>Choose image</h3>
            {this.props.match.params.id 
            ? <input type="file" onChange={this.handleChangeImage} accept=".jpg, .jpeg, .png" />
             
            : <input required type="file" onChange={this.handleChangeImage} accept=".jpg, .jpeg, .png" />

            } 
            <div className="post-button">
            <Button
                isSubmitting={this.state.isSubmitting}

              ></Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default GalleryContent;
