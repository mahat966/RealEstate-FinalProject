import React from "react";
import { Component } from "react";
import "./Career.component.css";
import Axios from "axios";
import { Button } from '../../utils/button';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const defaultForm = {
  fullName: '',
  email: '',
  applyingPosition: '',
  coverLetter: '',
  uploadFile: ''
}

class Career extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        ...defaultForm
      },
      error: {
        ...defaultForm
      },
      isSubmitting: false,
      isValidForm: false
    }
  }

componentDidMount(){
  window.scrollTo(0,500);

}

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((preState) => ({
      data: {
        ...preState.data,
        [name]: value
      }
    }), () => {
      this.validateForm(name);
    })
  }


  handleChangeFile = (e) => {
    let reader = new FileReader();
    this.setState({
      data: { ...this.state.data, uploadFile: e.target.files[0] },
    });
    let files = e.target.files[0];
    reader.onload = (e) => {
      this.setState({
        fileUrl: e.target.result,
      });
    };

    if (files) {
      reader.readAsDataURL(files);
    }
  };

  validateForm = fieldName => {
    let errMsg;
    switch (fieldName) {
      case 'email':
        errMsg = this.state.data[fieldName]
          ? this.state.data[fieldName].includes('@') && this.state.data[fieldName].includes('.com')
            ? ''
            : 'Invalid email. Email must be like "example@example.com "'
          : 'Email is required'
          break;
      default:
        break;
    }

    this.setState(pre => ({
      error: {
        ...pre.error,
        [fieldName]: errMsg
      }
    }), () => {
      const errors = Object
        .values(this.state.error)
        .filter(err => err);
      this.setState({
        isValidForm: errors.length === 0
      })
    })
  }




  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      isSubmitting: true
    })
    e.target.reset();
    let fileData = new FormData();
    fileData.append("fullName", this.state.data.fullName);
    fileData.append("email", this.state.data.email);
    fileData.append("applyingPosition", this.state.data.applyingPosition);
    fileData.append("coverLetter", this.state.data.coverLetter);
    fileData.append(
      "uploadFile",
      this.state.data.uploadFile
    );

    const response = await Axios.post(
      `${BASE_URL}/career`,
      fileData,

    );
    if (response.data._id) {
      this.props.history.push("/career");
      this.setState({
        isSubmitting: false,
        isValidForm: false
      })
    }
  }








  render() {

    return (
      <div className="career">
        <div className="bannerImage">
          <img src="images/contact.jpg" alt="career" />
          <div className="centerText">
            <h1>Career</h1>
          </div>
        </div>

        <div className="career_container">
          <h1>Career</h1>

          <div className="row">
            <div className="col-md-6">
              <form className="form-group" onSubmit={this.handleSubmit}>
                Full Name <label for="fullName">(* required)</label>
                <input required className="form-control" name="fullName" type="text" onChange={this.handleChange} />

              Email <label for="email">(* required)</label>
                <input required className="form-control" name="email" type="text" onChange={this.handleChange} />
                <p className="error">{this.state.error.email}</p>
              Applying Position <label for="selectPosition">(* required)</label>

                <select required className="form-control" name="applyingPosition" id="position" onChange={this.handleChange}>
                  <option value="">Choose position to apply</option>
                  <option value="Architect">Architect</option>
                  <option value="Civil Engineer">Civil Engineer</option>
                  <option value="Supervisor">Supervisor</option>
                  <option value="Worker">Worker</option>
                </select>
                <br />
              Cover Letter<label for="coverLetter"></label>
                <textarea
                  name="coverLetter"
                  rows="5"
                  className="form-control"
                  onChange={this.handleChange}
                ></textarea>
                <br />
              Upload CV / Resume <label for="file">(* required)</label>
                <input
                  required
                  name="uploadFile"
                  type="file"
                  className="form-control"
                  onChange={this.handleChangeFile}
                  accept="application/msword, text/plain, application/pdf" />

                <Button
                  isSubmitting={this.state.isSubmitting}
                  isValidForm={this.state.isValidForm}
                ></Button>
                {/* <button type="submit" className="btn-submit" data-toggle="modal" data-target="#exampleModalCenter" target="_top">Submit</button> */}
              </form>
            </div>

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Form submission successful</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    Your request is sent successfully
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" target="_top">Okay</button>

                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-6">
              <div className="career_image">
                <img src="images/career.jpg" alt="center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Career;
