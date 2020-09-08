// Reacto
import React, {Component} from 'react';
import { motion } from 'framer-motion';

// Styling
import {Form, Button, Row, Container} from 'react-bootstrap';

// Libraries
import { ReCaptcha } from 'react-recaptcha-google';
import emailjs from 'emailjs-com';

class Contact extends Component{
    constructor(props, context){
        super(props, context);
        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        isVerified: false,
        from_name: '',
        message: '',
        from_email: '',
    }

    //// Handlers and Setters
    // Dynamic state setter for the controlled forms
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // If the user successfully completes the captcha then
    // Have the submit button throw an alert and send the information
    handleSubmit(e){
        e.preventDefault();

        if(this.state.isVerified){
            alert("Email Sent! An automated message has been sent.")
        } else {
            alert("Please Complete the Captcha.")
        }
    }

    //// LIFECYCLES
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

    // email handling fetch request
    sendEmail(e){
        e.preventDefault();

        this.setState({
            from_name: '',
            message: '',
            from_email: '',
        });
        //SERVICE/TEMPLATE/USER
        emailjs.sendForm(process.env.REACT_APP_EJS_SERVICE_ID, process.env.REACT_APP_EJS_TEMPLATE_ID, e.target, process.env.REACT_APP_EJS_USER_ID)
            .then((resp) => {
                console.log(resp.text);
            }, (err) => {
                console.log(err.text);
            });
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
                {/* onSubmit={this.sendEmail.bind(this)} */}
                <Form className="w-50 mt-5 container" onSubmit={this.sendEmail.bind(this)}>
                    <Form.Label className="h3"> Contact Form </Form.Label>
                    <Form.Group as={Row}>                    
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control name="from_name" id="from_name" value={this.state.from_name} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group as={Row}>       
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="from_email" id="from_email" value={this.state.from_email} onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
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

                        {this.state.isVerified ?
                            <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
                        :
                            <></>
                        }
                        
                    </Container>
                </Form>
           </motion.div>
        )
    }
}

export default Contact;