// Reacto
import React, { useState } from 'react';

// Styling
import { Form, Button, Row, Container } from 'react-bootstrap';

// Libraries
import { ReCaptcha } from 'react-recaptcha-google';

// Components
import {onLoadRecaptcha, verifyCallback} from './Utils/CaptchaUtils';
import { sendEmail } from './Utils/FormUtils';

function ContactForm(props){
    // eslint-disable-next-line
    let captcha = ''; // Leave this for the captcha to store ref here

    // Functional States
    const [isVerified, setIsVerified] = useState(false);
    const [information, setInformation] = useState({
        from_name: '',
        from_email: '',
        message: '',
    });
    
    // Setter for the functional states
    const handleChange = e => {
        // console.log(e.target)
        const {name, value} = e.target
        setInformation({...information, [name]: value})
    }

    return(
        <Form className="w-50 mt-5 container" onSubmit={sendEmail}>
            <Form.Label className="h3"> Contact Form </Form.Label>
            <Form.Group as={Row}>                    
                <Form.Label>Full Name</Form.Label>
                <Form.Control name="from_name" id="from_name" onChange={handleChange}  value={information.from_name} />
            </Form.Group>

            <Form.Group as={Row}>       
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="from_email" id="from_email" onChange={handleChange} value={information.from_email} />
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" id="message" onChange={handleChange} value={information.message} />
            </Form.Group>

            <Container className="d-flex justify-content-center">
                {/* This is the Captcha */}
                <ReCaptcha
                    ref={(el) => {captcha = el;}}
                    size="normal"
                    data-theme="dark"            
                    render="explicit"
                    sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                    onloadCallback={onLoadRecaptcha} // Captcha is used here
                    verifyCallback={e => verifyCallback(e, setIsVerified)}
                />

                {isVerified ?
                    <Button type="submit">Submit</Button>
                :
                    <></>
                }
                
            </Container>
        </Form>
    )
}

export default ContactForm;