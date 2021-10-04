import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <Navbar bg='dark' variant="dark">
                <Container>
                    <Navbar.Brand>Fight School</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link > <NavLink className='nav-link' to='/home'>Home</NavLink> </Nav.Link>
                        <Nav.Link > <NavLink className='nav-link' to='/about'>About</NavLink> </Nav.Link>
                        <Nav.Link > <NavLink className='nav-link' to='/services'>Services</NavLink> </Nav.Link>
                        <Nav.Link > <NavLink className='nav-link' to='/instructor'>Instructor</NavLink> </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header;