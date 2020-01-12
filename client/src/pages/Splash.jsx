import React from "react";

import { Button, Col, Row, Container, Jumbotron } from 'react-bootstrap';

export default function Splash(props) {
    return (
        <Container>
            <Row>
                <Col >
                    <Jumbotron fluid className='mt-4'>
                        <h1 className='text-center'>Realtor Assist</h1>
                        <p className='text-center'>Helping your Real Estate office run more efficiently</p>
                    
                        <Row className="text-center">
                        <Col >
                            <Button 
                            type="submit" 
                            className="btn btn-primary" 
                            onClick={() => props.history.push('/signup')}
                            >Signup</Button>
                        </Col>
                        <Col >
                            <Button 
                            type="submit" 
                            className="btn btn-primary"
                            onClick={() => props.history.push('/login')}
                            >Login</Button>
                        </Col>
                    </Row>
                    </Jumbotron>
                    
                    <Jumbotron fluid className='mt-4'>
                        <h1 className='text-center'>We help agents & assistants create systems for their real estate business</h1>
                        <Row className="text-center">
                        <Col >
                        <Button 
                            type="submit" 
                            className="btn btn-primary" 
                            //onClick={() => props.history.push('/signup')}
                            >Learn More</Button>
                            </Col>
                            </Row>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}