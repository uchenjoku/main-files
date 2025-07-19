import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import user from '../../store/user'
import { Media } from '../../components'
import { Facebook, Google} from 'react-bootstrap-icons'
const ProfileEdit = () => {
  return (
    <Row className="gy-5">
        <Col xs="12">
            <Row className="gy-4">
                <Col lg="3">
                    <h6>Personal Information</h6>
                    <div className="tyn-subtext">Edit Your personal Info</div>
                </Col>
                <Col lg="9">
                    <Row className="g-gs">
                        <Col lg="6">
                            <div className="form-group">
                                <Form.Label htmlFor="firstName">First Name</Form.Label>
                                <div className="form-control-wrap">
                                    <Form.Control type="text" id="firstName" placeholder="First Name" defaultValue={user.name.split(" ")[0]} />
                                </div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="form-group">
                                <Form.Label htmlFor="lastName">Last Name</Form.Label>
                                <div className="form-control-wrap">
                                    <Form.Control type="text" id="lastName" placeholder="Last Name" defaultValue={user.name.split(" ")[user.name.split(" ").length - 1]} />
                                </div>
                            </div>
                        </Col>
                        <Col xs="12">
                            <div className="form-group">
                                <Form.Label className="d-flex" htmlFor="primaryEmail">Main Email <span className="small ms-2 text-success">Varified</span> <a href="#" className="link link-primary ms-auto">Add Email</a></Form.Label>
                                <div className="form-control-wrap">
                                    <Form.Control type="text" id="primaryEmail" disabled placeholder="Primary Email" defaultValue={user.mail} />
                                </div>
                                <div className="tyn-subtext mt-2">You need to have at least one email connected with your account</div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="form-group">
                                <Form.Label htmlFor="phoneNumber">Phone Number</Form.Label>
                                <div className="form-control-wrap">
                                    <Form.Control type="text" id="phoneNumber" placeholder="Your Number" defaultValue={user.phone} />
                                </div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="form-group">
                                <Form.Label htmlFor="phoneNumber">Country</Form.Label>
                                <div className="form-control-wrap">
                                    <Form.Select defaultValue="Armenia">
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Åland Islands">Åland Islands</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="American Samoa">American Samoa</option>
                                        <option value="Andorra">Andorra</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Anguilla">Anguilla</option>
                                        <option value="Antarctica">Antarctica</option>
                                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Aruba">Aruba</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijan">Azerbaijan</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Belgium">Belgium</option>
                                    </Form.Select>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
        <Col xs="12">
            <Row className="gy-4">
                <Col lg="3">
                    <h6>Sign-in Method</h6>
                    <div className="tyn-subtext">Edit Your personal Info</div>
                </Col>
                <Col lg="9">
                    <Row className="g-gs">
                        <Col xs="12">
                            <div className="border rounded-2 p-3 position-relative">
                                <div className="d-flex flex-wrap flex-sm-nowrap justify-content-between align-items-center w-100 pe-5">
                                    <Media.Group className="mw-100">
                                        <Media className="text-bg-danger">
                                            <Google />
                                        </Media>
                                        <Media.Col>
                                            <h6 className="name">Google Account</h6>
                                            <span className="content">Your google account is connected.</span>
                                        </Media.Col>
                                    </Media.Group>
                                    <div className="position-absolute end-0 me-3">
                                        <Form.Check className="form-check form-check-reverse" type="switch" id="googleAccount" defaultChecked></Form.Check>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12">
                            <div className="border rounded-2 p-3">
                                <div className="d-flex flex-wrap flex-sm-nowrap justify-content-between align-items-center">
                                    <Media.Group className="w-100">
                                        <Media className="text-bg-primary">
                                            <Facebook />
                                        </Media>
                                        <Media.Col>
                                            <h6 className="name">Facebook Account</h6>
                                            <span className="content">You can connect with your facebook account.</span>
                                        </Media.Col>
                                    </Media.Group>
                                    <div className="ms-5 mt-3 mt-sm-0 ms-sm-0">
                                        <Button size="sm" className="ms-2">Connect</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    </Row>
  )
}

export default ProfileEdit