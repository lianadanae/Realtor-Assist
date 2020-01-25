import React, { Component } from "react";
//import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../api";
import { Col, Row, Container } from "../components/Grid";
import CardHolder from "../components/CardHolder";
import { Card, Form } from "react-bootstrap";

class Listings extends Component {
  state = {
    listings: [],
    address: "",
    startDate: new Date(),
    notes: ""
  };

  componentDidMount() {
    this.loadListings();
  }

  loadListings = () => {
    API.getListings()
      .then(res =>
        this.setState({ listings: res.data, address: "", startDate: new Date(), notes: "" })
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

  render() {
    return (
      <Container fluid>
        <Row>
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
    {listing.startDate}
    {listing.notes}
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
</Card>
            )}
        )}
<CardHolder></CardHolder>

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
