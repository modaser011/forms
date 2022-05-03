import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import './App.css';
import React from 'react';
import { Container,Form,Button,Col,Row} from "react-bootstrap";
const LoginPage = () => {
    return (
        <>
            <Container className="cont">
                <h1 className="shadow-sm mt-5 p-3 text-center rounded">Login</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className=" frm p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className="email" type="email" placeholder="Enter email" required />
                            </Form.Group>
                            <br/>

                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" className="Password" placeholder="Password" required />
                            </Form.Group>
  <br/>

                            <Button variant="success btn-block" className="c" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default LoginPage;