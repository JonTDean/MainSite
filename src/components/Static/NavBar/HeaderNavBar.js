// Libraries
import React, {Component} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

class HeaderNavBar extends Component{
    state = [

    ]

    render(){
        return(
            <div className="border-bottom">
                {/* Navbar Logo */}
                <Navbar.Brand className="float-left">
                    {/* React needs a require() in order to process images */}
                    <Link to="/">
                        <img src={require('../../../assets/Pictures/JTD_animated.svg')}/>
                    </Link>
                </Navbar.Brand>

                {/* Navbar Items */}
                <Navbar className="justify-content-center">
                    <Nav className="row align-items-center">
                        <Link to="/" className="col">Home</Link>
                        <Link to="/Portfolio" className="col">Portfolio</Link>
                        <Link to="/Blog" className="col">Blog</Link>
                        <Link to="/Contact" className="col">Contact</Link>
                    </Nav>
                </Navbar>
            </div>

        )
    }
}

export default HeaderNavBar;