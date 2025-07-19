import React from 'react';
import Layout from '../../layout/blank'
import {Google, Facebook} from "react-bootstrap-icons"
import {Button, Card, Row, Col, Form, Container} from "react-bootstrap"
import {Link} from "react-router-dom"
import LogoLink from "../../components/Logo/LogoLink"

function Register() {
  return (
    <Layout title="Register" content="tyn-auth tyn-auth-centered">
      <Container>
        <Row className="justify-content-center">
            <Col xl="6" lg="8">
                <div className="my-3 text-center">
                    <LogoLink size="sm" full />
                </div>
                <Card className="border-0">
                    <div className="p-4">
                        <h3>Create Account</h3>
                        <Row className="g-3 gx-4">
                            <Col sm="6">
                                <Form.Group className="form-group">
                                    <label className="form-label" htmlFor="username">Your Name</label>
                                    <div className="form-control-wrap">
                                        <Form.Control type="text" id="username" placeholder="yourname" />
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col sm="6">
                                <Form.Group className="form-group">
                                    <label className="form-label" htmlFor="email-address">Email Address</label>
                                    <div className="form-control-wrap">
                                        <Form.Control type="text" id="email-address" placeholder="youremail@example.com" />
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col sm="6">
                                <Form.Group className="form-group">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <div className="form-control-wrap">
                                        <Form.Control type="password" id="password" placeholder="password" />
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col sm="6">
                                <Form.Group className="form-group">
                                    <label className="form-label" htmlFor="repeat-password">Password Repeat</label>
                                    <div className="form-control-wrap">
                                        <Form.Control type="password" id="repeat-password" placeholder="password again" />
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col xs="12">
                                <Form.Check>
                                    <Form.Check.Input id="privacy-term-agree" type="checkbox" />
                                    <Form.Check.Label htmlhtmlFor="privacy-term-agree">I agree with <a href="#">privacy policy &amp; terms</a></Form.Check.Label>
                                </Form.Check>
                            </Col>
                            <Col xs="12">
                                <Link className="btn btn-primary w-100" to="/">Account Register</Link>
                            </Col>
                        </Row>
                    </div>
                    <div className="p-4 border-top border-light">
                        <Row className="justify-content-center">
                            <Col xs="9">
                                <h6 className="tyn-title-overline text-center pb-1">Or Signup With</h6>
                                <ul className="d-flex gap gap-3">
                                    <li className="flex-grow-1"><Button variant="light" className="w-100"><Google /><span>Google</span></Button></li>
                                    <li className="flex-grow-1"><Button variant="light" className="w-100"><Facebook /><span>Facebook</span></Button></li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Card>

                <div className="text-center mt-4"><p className="small">Already have an account? <Link to="/login">Login</Link></p></div>
                
            </Col>
        </Row>
    </Container>
    </Layout>
  )
}

export default Register