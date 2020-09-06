import React, {Component} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

class HeaderNavBar extends Component{
    state = [

    ]

    render(){
        return(
            <Navbar className="" >
                <Nav>
                    <Link to="/">Home</Link>
                    <Link to="/Portfolio">Portfolio</Link>
                    <Link to="/Blog">Blog</Link>
                    <Link to="/Contact">Contact</Link>
                </Nav>
            </Navbar>
        )
    }
}

export default HeaderNavBar;