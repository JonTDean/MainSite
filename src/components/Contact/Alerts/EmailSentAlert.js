// Reacto
import React, { useState } from 'react';

// Styling
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function EmailSentAlert(props){
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
  
    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Email Sent!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Thank you for contacting me, an automated message will be sent to your e-mail and I will return your e-mail shortly after.
            Thank you, 
            Jonathan T. Dean
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    );
}

export default EmailSentAlert;