import React from 'react'
import { Accordion } from 'react-bootstrap'

function QuestionAnswers() {
  return (
    <Accordion defaultActiveKey="0" className="d-flex flex-column gap-2">
        <Accordion.Item eventKey="0" className="rounded">
            <Accordion.Button className="rounded shadow-none">
            <h5>What kind of questions can I ask the chatbot?</h5>
            </Accordion.Button>
            <Accordion.Body className="tyn-text-block pt-0">
            <p>You can ask the chatbot any question related to our products or services. Some common questions include.</p>
            <ol>
                <li>How do I place an order?</li>
                <li>What is your return policy?</li>
                <li>How do I track my shipment?</li>
                <li>Can I change my order after it has been placed?</li>
            </ol>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="rounded">
            <Accordion.Button className="rounded shadow-none">
            <h5>What is this chatbot for?</h5>
            </Accordion.Button>
            <Accordion.Body className="tyn-text-block pt-0">
            <p>This chatbot is designed to provide customer service support. You can use it to get answers to common questions, find information about our products or services, and get help with any issues you may be experiencing.</p>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="rounded">
            <Accordion.Button className="rounded shadow-none">
            <h5>How do I use the chatbot?</h5>
            </Accordion.Button>
            <Accordion.Body className="tyn-text-block pt-0">
            <p>To use the chatbot, simply type your question or request into the chat window. The chatbot will then provide a response or guide you through the process of finding the information you need.</p>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="rounded">
            <Accordion.Button className="rounded shadow-none">
            <h5>What if the chatbot can’t answer my question?</h5>
            </Accordion.Button>
            <Accordion.Body className="tyn-text-block pt-0">
            <p>If the chatbot is unable to answer your question or provide the information you need, it will direct you to other resources such as our customer service team or website.</p>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" className="rounded">
            <Accordion.Button className="rounded shadow-none">
            <h5>Can I use the chatbot to provide feedback or make a complaint?</h5>
            </Accordion.Button>
            <Accordion.Body className="tyn-text-block pt-0">
            <p>Yes, you can use the chatbot to provide feedback or make a complaint. Simply type your message into the chat window and the chatbot will guide you through the process of submitting your feedback or complaint.</p>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5" className="rounded">
            <Accordion.Button className="rounded shadow-none">
            <h5>How do I know if my issue has been resolved?</h5>
            </Accordion.Button>
            <Accordion.Body className="tyn-text-block pt-0">
            <p>If you have submitted a request for assistance through the chatbot, you will receive a confirmation message once your issue has been resolved. You can also check the status of your request at any time by asking the chatbot.</p>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6" className="rounded">
            <Accordion.Button className="rounded shadow-none">
            <h5>Can I speak to a live agent instead of using the chatbot?</h5>
            </Accordion.Button>
            <Accordion.Body className="tyn-text-block pt-0">
            <p>Yes, if you prefer to speak with a live agent instead of using the chatbot, you can do so by following the prompts provided by the chatbot. Our customer service team is available to assist you during our regular business hours.</p>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
  )
}

export default QuestionAnswers