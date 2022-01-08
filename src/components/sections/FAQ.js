import React from 'react'
import {Accordion} from 'react-bootstrap'

const FAQ = () => {
    return (
        <div className="wrap_faq">
            <div className="container" id="faq">
            <p className="text-left faq_title">FREQUENTLY ASKED QUESTIONS</p>
            <Accordion className="chill_font faq_accordion">
            <Accordion.Item eventKey="0">
                <Accordion.Header className="faq_question">When does minting begin?</Accordion.Header>
                <Accordion.Body className="faq_answer">
                    Minting will start Monday the 23rd at 5PM UTC
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header className="faq_question">How many Chill Frogs will be minted?</Accordion.Header>
                <Accordion.Body className="faq_answer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam. 
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header className="faq_question">How much do they cost to mint?</Accordion.Header>
                <Accordion.Body className="faq_answer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam.quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header className="faq_question">Is there a limit on how many Chill Frogs I can mint?</Accordion.Header>
                <Accordion.Body className="faq_answer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header className="faq_question">When is the reveal?</Accordion.Header>
                <Accordion.Body className="faq_answer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            </div> 
        </div>
    )
}

export default FAQ
