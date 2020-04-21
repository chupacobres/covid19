import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link style={{position: "absolute", bottom: -6, right: 20}} href="https://github.com/chupacobres">Github Code</Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                    <Nav.Link style={{position: "absolute", bottom: -6, left: 20}} href="https://github.com/chupacobres">Silly Code (c)</Nav.Link>
                </Nav>
            </Navbar>

        </div>
    )
}

export default Header