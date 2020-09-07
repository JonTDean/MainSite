// Reacto
import React, {Component} from 'react';
import { motion } from 'framer-motion';

// Styling
import {Form, Button, Row, Container} from 'react-bootstrap';

// Libraries
import { ReCaptcha } from 'react-recaptcha-google';

class Contact extends Component{
    constructor(props, context){
        super(props, context);
        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        isVerified: false,
    }

    // If the user successfully completes the captcha then
    // Have the submit button throw an alert and send the information
    handleSubmit(){
        if(this.state.isVerified){
            alert("Email Sent! An automated message has been sent.")
        } else {
            alert("Please Complete the Captcha.")
        }
    }

    // Resets the state of Recaptcha on Component Load
    componentDidMount() {
        if (this.captcha) {
            console.log("started, just a second...");
            this.captcha.reset();
        }
    }  
    
    // Resets the state of ReCaptcha when onLoad is called
    onLoadRecaptcha() {
        if (this.captcha) {
            this.captcha.reset();
        }
    }  

    // This handles the verification of the user
    // NEED TO ADD ERROR HANDLING EVENTUALLY
    verifyCallback(resp) {
        if(resp){
            this.setState({
                isVerified:true
            })
        }
    }

    render(){
        console.log("Contact");

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

                    <Container className="d-flex justify-content-center">
                        {/* This is the Captcha */}
                        <ReCaptcha
                            ref={(el) => {this.captcha = el;}}
                            size="normal"
                            data-theme="dark"            
                            render="explicit"
                            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                            onloadCallback={this.onLoadRecaptcha}
                            verifyCallback={this.verifyCallback}
                        />

                        <Button onClick={this.handleSubmit}>Submit</Button>
                    </Container>
                </Form>
           </motion.div>
        )
    }
}

export default Contact;