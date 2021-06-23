import React, { Component } from 'react';
import API from "../../api";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Modal } from 'react-bootstrap';
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Form, FormGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddNewListing extends Component {
  state = {
    address: "",
    startDate: new Date(),
    notes: ""
  };

  saveListing = () => {
    API.saveListing()
      .then(res =>
        this.setState({ listings: res.data, address: "", startDate: new Date(), notes: "" })
      )
      .catch(err => console.log(err));
  };


  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.address && this.state.startDate) {
      API.saveListing({
        address: this.state.address,
        date: this.state.startDate,
        notes: this.state.notes
      })
        .then(res => {
          // redirect back to listings
          // when new listing successfully added
          this.props.history.push('/listings');
          //this.loadListings()
        })
        .catch(err => console.log(err));
    }
  };
  

  render() {

    return (
      <Modal
        show={true}
        onHide={() => this.props.history.push('/listings')}
        animation={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            New Listing
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Row>
              <Col size="md-12">
                <Jumbotron>
                  <h1>Add a new property listing</h1> 
                </Jumbotron>
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
                      selected={this.state.startDate}
                      onSelect={this.handleSelect} //when day is clicked
                      onChange={this.handleChange} //only when value has changed
                      dateFormat="MM/dd/yy"
                      name="date"
                      placeholder="Date Listed (required)"
                    />
                    <FormGroup>
                    <Form.Label>Notes</Form.Label>
                    <TextArea
                      value={this.state.notes}
                      onChange={this.handleInputChange}
                      name="notes"
                      placeholder="(Optional)"
                    />
                    </FormGroup>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <FormBtn
            disabled={!(this.state.startDate && this.state.address)}
            onClick={this.handleFormSubmit}
          >
            Submit Listing
              </FormBtn>
        </Modal.Footer>
      </Modal>
    );
  }
};

export default AddNewListing;