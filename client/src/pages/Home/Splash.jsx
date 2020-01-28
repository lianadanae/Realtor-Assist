import React from "react";
import { Button, Col, Row, Container, Jumbotron } from 'react-bootstrap';
import "./style.css";

export default function Splash(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <Jumbotron fluid className='mt-6'>
                    <img src="ralogo.png" alt="logo" className="image"></img>
                    </Jumbotron>
                    <Jumbotron fluid className='mt-6'>
                        <h1 className='text-center'>Helping your Real Estate office run more efficiently</h1>
                        <Row className="text-center">
                        <Col >
                            <Button 
                            type="submit" 
                            className="btn btn-success" 
                            style={{ fontSize: '1rem' }}
                            onClick={() => props.history.push('/signup')}
                            >Signup</Button>
                        </Col>
                        <Col >
                            <Button 
                            type="submit" 
                            className="btn btn-success"
                            style={{ fontSize: '1rem' }}
                            onClick={() => props.history.push('/login')}
                            >Login</Button>
                        </Col>
                    </Row>
                    </Jumbotron>
                    
                    {/* <Jumbotron fluid className='mt-4'>
                        <h1 className='text-center'>Helping real estate assistants & coordinators create organizational systems for their office</h1>
                        <Row className="text-center">
                        <Col >
                            </Col>
                            </Row>
                    </Jumbotron> */}
                </Col>
            </Row>
        </Container>
        
    );
}