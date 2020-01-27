import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../api";
import { Col, Row, Container } from "../components/Grid";
import { Card } from "react-bootstrap";
import Moment from 'react-moment';
import CheckBoxes from "../components/CheckBoxes";

class Listings extends Component {
  state = {
    listings: [],
    address: "",
    startDate: new Date(),
    notes: "",
    contract: false,
    mls: false,
    showingTime: false,
    compliance: false,
    disclosures: false,
    faceBook: false
  };

  componentDidMount() {
    this.loadListings();
  }

  loadListings = () => {
    API.getListings()
      .then(res =>
        this.setState({
          listings: res.data,
          address: "",
          startDate: new Date(),
          notes: "",
          contract: false,
          mls: Boolean,
          showingTime: Boolean,
          compliance: Boolean,
          disclosures: Boolean,
          faceBook: Boolean,
        })
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
            {this.state.listings.map(listing => {
              return (
                <Card key={listing._id}style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                  <Card.Body>
                    <DeleteBtn onClick={() => this.deleteListing(listing._id)} />
                    <Card.Title>{listing.address}</Card.Title>
                    <Card.Text>
                      <Moment format="MM/DD/YYYY">
                        {listing.startDate}
                      </Moment>
                    </Card.Text>
                    <Card.Text>
                      {listing.notes}
                    </Card.Text>
                  </Card.Body>

                  <CheckBoxes listing={listing}></CheckBoxes>
                </Card>
              )
            }
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Listings;
