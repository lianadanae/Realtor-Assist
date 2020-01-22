import React, { Component } from "react";
//import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../api";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import CardHolder from "../components/CardHolder";
import { Card, Form, FormGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
//import SideNav from "../components/SideNav";
// import { Chevron, Icon, NavLink, menuItems } from "../components/SideNav";

class Listings extends Component {
  state = {
    listings: [],
    address: "",
    startDate: new Date(),
    status: "",
    notes: ""
  };

  componentDidMount() {
    this.loadListings();
  }

  loadListings = () => {
    API.getListings()
      .then(res =>
        this.setState({ listings: res.data, address: "", startDate: new Date(), status: "", notes: "" })
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

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.address && this.state.date) {
      API.saveListing({
        address: this.state.address,
        date: this.state.date,
        status: this.state.status,
        notes: this.state.notes
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
           <CardHolder></CardHolder>

            <Form>
              <FormGroup>
              <Form.Label>Address</Form.Label>
              <Input
                value={this.state.address}
                onChange={this.handleInputChange}
                name="address"
                placeholder="(required)"
              />
              <Form.Label>Date Listed</Form.Label>
              <DatePicker
                selected={this.state.date}
                onSelect={this.handleSelect} //when day is clicked
                onChange={this.handleChange} //only when value has changed
                name="date"
                placeholder="Date Listed (required)"
              />
              <Form.Label>Status</Form.Label>
              <Input
                value={this.state.status}
                onChange={this.handleInputChange}
                name="status"
                placeholder="(required)"
              />
              <Form.Label>Notes</Form.Label>
              <TextArea
                value={this.state.notes}
                onChange={this.handleInputChange}
                name="notes"
                placeholder="(Optional)"
              />

              <FormBtn
                disabled={!(this.state.date && this.state.address)}
                onClick={this.handleFormSubmit}
              >
                Submit Listing
              </FormBtn>
              </FormGroup>
            </Form>
          </Col>

          {/* Listings */}
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>My Property Listings</h1>
            </Jumbotron>
            {this.state.listings.map(listing=>{
            return(
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>{listing.address}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <Form>
  <Form.Group controlId="formBasicCheckbox">
  {['checkbox'].map(type => (
    <div key={`custom-${type}`} className="mb-3">
      <Form.Check 
        custom
        type={type}
        id={`custom-${type}`}
        label={`Check this custom ${type}`}
      />
      </div>
      ))}
      </Form.Group>
      </Form>

  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
  </Card.Body>
</Card>
            )}
        )}

            {/* {this.state.listings.length ? (
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
            )} */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Listings;
