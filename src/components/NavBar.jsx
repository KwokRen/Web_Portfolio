import React from 'react'
import Logo from './Logo'
import { Navbar, Nav } from 'react-bootstrap'
import '../styles/Navbar.css'

const NavBar = (props) => {
    return (
        <Navbar expand="lg" fixed="top">
        <Navbar.Brand>
            <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="#link">Resume</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar