import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://www.geisinger.org/-/media/OneGeisinger/Images/ghs/sites/coronavirus/geisinger-covid19-icon.gif"
                        width="70"
                        className="d-inline-block align-top"
                    />{' '}
  Covid 19 Statistics
  
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Header