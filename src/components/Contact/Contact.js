// Reacto
import React, {Component} from 'react';
import { motion } from 'framer-motion';

// Styling
import {Form, Button, Row, Container} from 'react-bootstrap';

class Contact extends Component{
    render(){
        console.log("Contact")

        return(
            <motion.div
                className="align-items-center"
                initial="out"
                animate="in" 
                exit="out"
                variants={this.props.pageVariant}
            >
                <Form as={Container} className="w-50 mt-5">
                    <Form.Label className="h3"> Contact Form </Form.Label>
                    <Form.Group as={Row}>                    
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="name" />
                    </Form.Group>
                    
                    <Form.Group as={Row}>
                        <Form.Label>Company</Form.Label>
                        <Form.Control type="name" />
                    </Form.Group>

                    <Form.Group as={Row}>       
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" />
                    </Form.Group>

                    <Button>Submit</Button>
                </Form> 
           </motion.div>
        )
    }
}

export default Contact;