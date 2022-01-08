import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

const Header = () => {
    return (
        <div className="container">
            <Navbar bg="" expand="lg">
                <Container>
                    <Navbar.Brand href="/" className="brand_logo">Chill Frogs</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <Nav.Link href="#about" className="nav_menu">ABOUT</Nav.Link>
                        <Nav.Link href="#roadmap" className="nav_menu">ROADMAP</Nav.Link>
                        <Nav.Link href="#faq" className="nav_menu">FAQ</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header

