import React, { Component } from 'react';
import axios from 'axios';


class CheckBoxes extends Component {

  state = {
    contract: false,
    mls: false,
    showingTime: false,
    compliance: false,
    disclosures: false,
    faceBook: false
  };

  toggleChangeContract = () => {
    this.setState(prevState => ({
      contract: !prevState.contract,
    }));
  }

  toggleChangeMls = () => {
    this.setState(prevState => ({
      mls: !prevState.mls,
    }));
  }

  toggleChangeShowingTime = () => {
    this.setState(prevState => ({
      showingTime: !prevState.showingTime,
    }));
  }

  toggleChangeCompliance = () => {
    this.setState(prevState => ({
      compliance: !prevState.compliance,
    }));
  }

  toggleChangeDisclosures = () => {
    this.setState(prevState => ({
      disclosures: !prevState.disclosures,
    }));
  }

  toggleChangeFaceBook = () => {
    this.setState(prevState => ({
      faceBook: !prevState.faceBook,
    }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    let arr = [];
    for (var key in this.state) {
      if(this.state[key] === true) {
        arr.push(key);
      }
    }
    let data = {
      check: arr.toString() 
    };
    axios.post('http://localhost:4000/checks/add', data)
          .then(res => console.log(res.data));
  }

  render() {
    return (
      <div className="container">
        <form onSubmit = {this.onSubmit}>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.contract}
                onChange={this.toggleChangeContract}
                className="form-check-input"
              />
              Signed contract
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.mls}
                onChange={this.toggleChangeMls}
                className="form-check-input"
              />
              Uploaded to the MLS
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.showingTime}
                onChange={this.toggleChangeShowingTime}
                className="form-check-input"
              />
              Showing Time added to listing
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.compliance}
                onChange={this.toggleChangeCompliance}
                className="form-check-input"
              />
              Compliance form uploaded
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.disclosures}
                onChange={this.toggleChangeDisclosures}
                className="form-check-input"
              />
              Property disclosures uploaded
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.faceBook}
                onChange={this.toggleChangeFaceBook}
                className="form-check-input"
              />
              Advertised on Facebook
            </label>
          </div>
          <div className="form-group">
            <button className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CheckBoxes;