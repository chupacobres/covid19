import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://www.geisinger.org/-/media/OneGeisinger/Images/ghs/sites/coronavirus/geisinger-covid19-icon.gif"
                        width="70"
                        className="d-inline-block align-top"
                    />{' '}
                            Covid 19 Statistics
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link style={{position: "absolute", bottom: 0, right: 20}} href="https://www.charitynavigator.org/index.cfm?bay=content.view&cpid=7779">How to donate wisely</Nav.Link>
                </Nav>
            </Navbar>

        </div>
    )
}

export default Header