import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {trackEvent} from "../../lib/analytics";
import Layout from '../../layout/main'
import Cookies from 'js-cookie';
import {  Col, Container, Row } from 'react-bootstrap';
  
const Generate = () => {
    const [fullname, setFullname] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const storedFullname = Cookies.get('fullname');
        if (storedFullname) {
            setFullname(storedFullname.trim());
            navigate(`/qr?fullname=${encodeURIComponent(storedFullname)}`, { replace: true });
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (fullname.trim()) {
            trackEvent('link_shared', {  committee_member: fullname });
            // Store fullname in cookies before redirect
            Cookies.set('fullname', fullname.trim(), { path: '/', secure: true });
            navigate(`/qr?fullname=${encodeURIComponent(fullname)}`);
        }
    };

    return (
        <Layout title="Welcome | Generate QR Code" content="tyn-content-page" footer={true}>
            <div className="tyn-main">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} md={6} lg={5}>
                            <form
                                onSubmit={handleSubmit}
                                className="p-4 rounded shadow-sm bg-white"
                                style={{ marginTop: "3rem" }}
                            >
                                <h3 className="mb-4 text-center">Enter Your Full Name</h3>
                                <div className="mb-3">
                                    <label htmlFor="fullname" className="form-label fw-semibold">
                                        Full Name
                                    </label>
                                    <input
                                        id="fullname"
                                        type="text"
                                        className="form-control"
                                        value={fullname}
                                        onChange={(e) => setFullname(e.target.value)}
                                        required
                                        placeholder="e.g. Jane Doe"
                                        autoFocus
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 fw-bold"
                                    style={{ letterSpacing: "0.5px" }}
                                >
                                    Go
                                </button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    );
};

export default Generate;