import React from 'react'
import { Button, Card, Col,  Row } from 'react-bootstrap';

import { BuildingFill, Check } from 'react-bootstrap-icons';
import { Section } from '../../layout/global'

const PricingSection = () => {
  return (
    <>
        <Section.Head center className="pb-0">
            <h2 className="h1">Try for free, no credit card</h2>
            <p>Billing: Save 17% with annual.</p>
        </Section.Head>
        <Section.Content>
            <Row className="g-4 justify-content-center">
                <Col xl="3" lg="4" sm="6">
                    <Card className="h-100 border-0">
                        <Card.Body className="p-4">
                            <div className="text-muted text-opacity-50 fs-7 mt-n2 fw-medium">Life Time</div>
                            <div className="h1 text-dark">$0</div>
                            <h5 className="pb-2 pt-1">Free Plan</h5>
                            <ul className="list-check fs-6 d-flex flex-column gap gap-2">
                                <li className="d-flex gap gap-2">
                                    <span className="text-success"> <Check /> </span>
                                    <span>Available on low demand</span>
                                </li>
                                <li className="d-flex gap gap-2">
                                    <span className="text-success"><Check /></span>
                                    <span>Standard response speed</span>
                                </li>
                                <li className="d-flex gap gap-2">
                                    <span className="text-success"><Check /></span>
                                    <span>Regular model updates</span>
                                </li>
                            </ul>
                            <div className="mt-4">
                                <Button variant="light">Current Plan</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl="3" lg="4" sm="6">
                    <Card className="h-100 border-0">
                        <Card.Body className="p-4">
                            <div className="text-success fs-7 mt-n2 fw-medium">Popular</div>
                            <div className="h1 text-primary">$33 <small className="fs-5">/mo</small></div>
                            <h5 className="pb-2 pt-1">Premium Plan</h5>
                            <ul className="list-check fs-6 d-flex flex-column gap gap-2">
                                <li className="d-flex gap gap-2">
                                    <span className="text-success"> <Check /> </span>
                                    <span>Always Available</span>
                                </li>
                                <li className="d-flex gap gap-2">
                                    <span className="text-success"><Check /></span>
                                    <span>Fast response speed</span>
                                </li>
                                <li className="d-flex gap gap-2">
                                    <span className="text-success"><Check /></span>
                                    <span>Early model updates</span>
                                </li>
                            </ul>
                            <div className="mt-4">
                                <Button variant="primary">Upgrade Now</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl="3" lg="4" sm="6">
                    <Card className="h-100 border-0">
                        <Card.Body className="p-4">
                            <div className="tyn-media tyn-circle bg-light mb-3 d-sm-none d-lg-inline-flex">
                                <BuildingFill />
                            </div>
                            <h5 className="pb-2 pt-1">Premium Plan</h5>
                            <ul className="list-check fs-6 d-flex flex-column gap gap-2">
                                <li className="d-flex gap gap-2">
                                    <span className="text-success"> <Check /> </span>
                                    <span>Everyting from premium</span>
                                </li>
                                <li className="d-flex gap gap-2">
                                    <span className="text-success"><Check /></span>
                                    <span>API Integration</span>
                                </li>
                                <li className="d-flex gap gap-2">
                                    <span className="text-success"><Check /></span>
                                    <span>24/7 Support assistant</span>
                                </li>
                            </ul>
                            <div className="mt-4">
                                <Button variant="success">Contact us</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Section.Content>
        
    </>
  )
}

export default PricingSection