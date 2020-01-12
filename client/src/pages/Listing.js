import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../api";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Listings extends Component {
  state = {
    listings: [],
    address: "",
    dateListed: "",
    status: ""
  };

  componentDidMount() {
    this.loadListings();
  }

  loadListings = () => {
    API.getListings()
      .then(res =>
        this.setState({ listings: res.data, address: "", dateListed: "", status: "" })
      )
      .catch(err => console.log(err));
  };

  deleteListing = id => {
    API.deleteListing(id)
      .then(res => this.loadListings())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.address && this.state.dateListed) {
      API.saveListing({
        address: this.state.address,
        dateListed: this.state.dateListed,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadListings())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add a new listing</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.address}
                onChange={this.handleInputChange}
                name="address"
                placeholder="Address (required)"
              />
              <Input
                value={this.state.dateListed}
                onChange={this.handleInputChange}
                name="dateListed"
                placeholder="Date Listed (required)"
              />
              <TextArea
                value={this.state.status}
                onChange={this.handleInputChange}
                name="status"
                placeholder="Status (Optional)"
              />
              <FormBtn
                disabled={!(this.state.dateListed && this.state.address)}
                onClick={this.handleFormSubmit}
              >
                Submit Listing
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>My Property Listings</h1>
            </Jumbotron>
            {this.state.listings.length ? (
              <List>
                {this.state.listings.map(listing => (
                  <ListItem key={listing._id}>
                    <Link to={"/listings/" + listing._id}>
                      <strong>
                        {listing.address} by {listing.dateListed}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteListing(listing._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Listings;
