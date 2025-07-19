import React from 'react';
import Layout from '../../layout/blank'
import {Google, Facebook} from "react-bootstrap-icons"
import {Button, Card, Row, Col, Form, Container} from "react-bootstrap"
import {Link} from "react-router-dom"
import LogoLink from "./../../components/Logo/LogoLink"

function Login() {
  return (
    <Layout title="Login" content="tyn-auth tyn-auth-centered">
      <Container>
        <Row className="justify-content-center">
            <Col xl="4" lg="5" md="7" sm="9">
                <div className="my-3 text-center">
                    <LogoLink size="sm" full />
                </div>
                <Card className="border-0">
                    <div className="p-4">
                        <h3>Login</h3>
                        <Row className="g-3">
                            <Col xs="12">
                                <Form.Group className="form-group">
                                    <Form.Label htmlFor="email-address">Email Address</Form.Label>
                                    <div className="form-control-wrap">
                                        <Form.Control type="text"  id="email-address" placeholder="youremail@example.com" />
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col xs="12">
                                <Form.Group className="form-group">
                                    <Form.Label className="d-flex" htmlFor="password">Password <Link to="/forgot" className="link link-primary ms-auto">Forgot ?</Link></Form.Label>
                                    <div className="form-control-wrap">
                                        <Form.Control type="password" id="password" placeholder="password" />
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col xs="12">
                                <Link className="btn btn-primary w-100" to="/">Account Login</Link>
                            </Col>
                        </Row>
                    </div>
                    <div className="p-4 border-top border-light">
                        <h6 className="tyn-title-overline text-center pb-1">Or Use With</h6>
                        <ul className="d-flex gap gap-3">
                            <li className="flex-grow-1"><Button variant="light" className="w-100"><Google /><span>Google</span></Button></li>
                            <li className="flex-grow-1"><Button variant="light" className="w-100"><Facebook /><span>Facebook</span></Button></li>
                        </ul>
                    </div>
                </Card>

                <div className="text-center mt-4"><p className="small">Don't have an account? <Link to="/register">Register</Link></p></div>
                
            </Col>
        </Row>
    </Container>
    </Layout>
  )
}

export default Login