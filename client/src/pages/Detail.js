// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
// import API from "../api";

// class Detail extends Component {
//   state = {
//     listing: {}
//   };

//   componentDidMount() {
//     API.getlisting(this.props.match.params.id)
//     .then(res => {     
//       this.setState({listing: res.data})
//     });
//   }

//   render() {
//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-12">
//             <Jumbotron>
//               <h1>
//                 {this.state.listing.address} by {this.state.listing.dateListed}
//               </h1>
//             </Jumbotron>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-10 md-offset-1">
//             <article>
//               <h1>Status</h1>
//               <p>{this.state.listing.status}</p>
//             </article>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-2">
//             <Link to="/">← Back to Listings</Link>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default Detail;
