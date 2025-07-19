import React from 'react';
import Layout from '../../layout/main'
import {  Col, Container, Row } from 'react-bootstrap';
import { LogoLink } from '../../components';
import { SendFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { MapPin, CalendarDays} from "lucide-react";

function Welcome() {
  return (
    <Layout title="Welcome" content="tyn-content-page" footer={true}>
      <div className="tyn-main">
          <Container>
            <div className="tyn-text-block text-center pb-4">
                <LogoLink />
                <h1 className="mt-3">African Music & Cultural Festival 2025</h1>
                <p><b>Free Event</b> - Experience the rhythm, flavours, and spirit of Africa</p>
                <p className="flex justify-center items-center gap-2 mb-6">
                <CalendarDays /> Nov 21st - 23rd, 2025 | <MapPin /> Federation Square, Melbourne </p>
            </div>
            <div className="text-center">
                <Row className="justify-content-center">
                    <Col xl="5">
                        <ul className="d-inline-flex flex-wrap bg-white p-2 rounded-3 justify-content-center gap gap-2">
                            <li className="flex-grow-1">
                                <input type="radio" className="btn-check" name="convotype" id="confirm" defaultChecked />
                                <label className="btn btn-light flex-column w-100" htmlFor="confirm"><span className="w-100 small mb-n3 pb-1">Confirm</span>Attendance</label>
                            </li>
                            <li className="flex-grow-1">
                               
                                <a
                                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=African+Music+%26+Cultural+Festival+2025&dates=20251121T010000Z/20251123T100000Z&details=Celebrate+Africa+with+music%2C+dance%2C+food%2C+fashion+%26+more+at+Fed+Square+Melbourne%21&location=Federation+Square%2C+Melbourne&sf=true&output=xml&recur=RRULE:FREQ=DAILY;COUNT=1&trp=false&reminder=60"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                > 
                                    <label className="btn btn-light flex-column w-100"><span className="w-100 small mb-n3 pb-1">Add to</span>Google Calendar</label>
                                </a>
                               
                            </li>
                            <li className="flex-grow-1">
                                  <a href="/amcf2025.ics" download>
                                    <label className="btn btn-light flex-column w-100" ><span className="w-100 small mb-n3 pb-1">Add to Apple </span>Outlook Calendar</label>
                                  </a>                               
                            </li>
                        </ul>
                    </Col>
                </Row>
                <div className="mt-4">
                    <Link to="/chatbot" className="btn btn-pill btn-rg btn-primary">
                        <SendFill />
                        <span>Start Talking</span>
                    </Link>
                </div>
            </div>
          </Container>
      </div>
    </Layout>
  )
}

export default Welcome