import React, { Component } from 'react';
//import axios from 'axios';
import api from '../../api';


class CheckBoxes extends Component {

  state = {
    contract: this.props.listing.contract || false,
    mls: this.props.listing.mls || false,
    showingTime: this.props.listing.showingTime || false,
    compliance: this.props.listing.compliance || false,
    disclosures: this.props.listing.disclosures || false,
    faceBook: this.props.listing.faceBook || false
  };

  toggleChangeContract = () => {
    api.adjustListing(this.props.listing._id, { ...this.props.listing, contract: !this.state.contract })
    this.setState(prevState => ({
      contract: !prevState.contract,
    }));
  }

  toggleChangeMls = () => {
    api.adjustListing(this.props.listing._id, { ...this.props.listing, mls: !this.state.mls })
    this.setState(prevState => ({
      mls: !prevState.mls,
    }));
  }

  toggleChangeShowingTime = () => {
    api.adjustListing(this.props.listing._id, { ...this.props.listing, showingTime: !this.state.showingTime })
    this.setState(prevState => ({
      showingTime: !prevState.showingTime,
    }));
  }

  toggleChangeCompliance = () => {
    api.adjustListing(this.props.listing._id, { ...this.props.listing, compliance: !this.state.compliance })
    this.setState(prevState => ({
      compliance: !prevState.compliance,
    }));
  }

  toggleChangeDisclosures = () => {
    api.adjustListing(this.props.listing._id, { ...this.props.listing, disclosures: !this.state.disclosures })
    this.setState(prevState => ({
      disclosures: !prevState.disclosures,
    }));
  }

  toggleChangeFaceBook = () => {
    api.adjustListing(this.props.listing._id, { ...this.props.listing, faceBook: !this.state.faceBook })
    this.setState(prevState => ({
      faceBook: !prevState.faceBook,
    }));
  }

  // onSubmit = (e) => {

  //   e.preventDefault();
  //   let arr = [];
  //   for (var key in this.state) {
  //     if(this.state[key] === true) {
  //       arr.push(key);
  //     }
  //   }
  //   let data = {
  //     check: arr.toString() 
  //   };
  //   axios.post('http://localhost:4000/checks/add', data)
  //         .then(res => console.log(res.data));
  // }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="form-check" style={{ fontSize: '1.25rem' }}>
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.contract}
                onChange={this.toggleChangeContract}
                className="form-check-input"
              />
              Signed contract
            </label>
          </div>
          <div className="form-check" style={{ fontSize: '1.25rem' }}>
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.mls}
                onChange={this.toggleChangeMls}
                className="form-check-input"
              />
              Uploaded to the MLS
            </label>
          </div>
          <div className="form-check" style={{ fontSize: '1.25rem' }}>
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.showingTime}
                onChange={this.toggleChangeShowingTime}
                className="form-check-input"
              />
              Showing Time added to listing
            </label>
          </div>
          <div className="form-check" style={{ fontSize: '1.25rem' }}>
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.compliance}
                onChange={this.toggleChangeCompliance}
                className="form-check-input"
              />
              Compliance form uploaded
            </label>
          </div>
          <div className="form-check" style={{ fontSize: '1.25rem' }}>
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.disclosures}
                onChange={this.toggleChangeDisclosures}
                className="form-check-input"
              />
              Property disclosures uploaded
            </label>
          </div>
          <div className="form-check" style={{ fontSize: '1.25rem' }}>
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.faceBook}
                onChange={this.toggleChangeFaceBook}
                className="form-check-input"
              />
              Advertised on Facebook
            </label>
          </div>
          <br></br>
          <div className="form-group">
            <button className="btn btn-primary" style={{ fontSize: '1rem' }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CheckBoxes;