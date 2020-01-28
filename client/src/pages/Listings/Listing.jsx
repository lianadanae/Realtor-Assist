import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../api";
import { Col, Row, Container } from "../../components/Grid";
import { Card } from "react-bootstrap";
import Moment from 'react-moment';
import CheckBoxes from "../../components/CheckBoxes";
import "./style.css";

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
          contract: Boolean,
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
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>My Property Listings</h1>
            </Jumbotron>
            {this.state.listings.map(listing => {
              return (
                <Card key={listing._id}className="card" style={{ width: '26rem' }}>
                  <Card.Img variant="top" src="house.png" />
                  <Card.Body>
                    <DeleteBtn onClick={() => this.deleteListing(listing._id)} />
                    <Card.Title style={{ fontSize: '2rem' }}>{listing.address}</Card.Title>
                    <Card.Text>
                      <Moment format="MM/DD/YYYY" style={{ fontSize: '1rem' }}>
                        {listing.startDate}
                      </Moment>
                    </Card.Text>
                    <Card.Text style={{ fontSize: '1.5rem' }}>
                      {listing.notes}
                    </Card.Text>
                  <CheckBoxes listing={listing}></CheckBoxes>
                  </Card.Body>
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
