// Reacto
import React, {Component} from 'react';

// Styling
import { Navbar, Nav, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';

// Libraries
import { Link } from "react-router-dom";

class HeaderNavBar extends Component{
    render(){
        return(
            <div className="border-bottom">
                <Navbar fluid="sm" className="container m-0 ml-5 d-flex justify-content-between" >
                    {/* Navbar Logo */}
                    <Navbar.Brand className="row">
                        {/* Router Link that points to the home directory */}
                        <Link to="/">
                            {/* React needs a require() in order to process images */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <h4>Jonathan T. Dean</h4>
                            </motion.div>
                        </Link>
                    </Navbar.Brand>
                    <Row>
                        {/* Navbar Items */}
                        <Nav className="col mr-5">
                            {/* <Link to="/" className="mr-5">Home</Link> */}
                            <Link to="/Portfolio" className="mr-5">Portfolio</Link>
                            <Link to="/Blog" className="mr-5">Blog</Link>
                            <Link to="/Contact" className="mr-5">Contact</Link>
                        </Nav>
                    </Row>
                </Navbar>
            </div> 
        )
    }
}

export default HeaderNavBar;

// <div className="border-bottom row">
// {/* Navbar Logo */}
// <Navbar.Brand className=" col ml-4 mt-3 mb-3">
//    {/* Router Link that points to the home directory */}
//    <Link to="/">
//        {/* React needs a require() in order to process images */}
//        <img src={require('../../../assets/Pictures/JTD_animated.svg')} alt="J.T.D." />
//    </Link>
// </Navbar.Brand>

// {/* Navbar Items */}
// {/* <Navbar className="justify-content-center ml-5 float-right"> */}
//    <Nav className="row align-items-center">
//        <Link to="/" className="col ml-2">Home</Link>
//        <Link to="/Portfolio" className="col ml-2">Portfolio</Link>
//        <Link to="/Blog" className="col ml-2">Blog</Link>
//        <Link to="/Contact" className="col ml-2">Contact</Link>
//    </Nav>
// {/* </Navbar> */}
// </div>