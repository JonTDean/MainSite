// Reacto
import React, {Component} from 'react';

// Styling
import { motion } from 'framer-motion';

// Libraries

// Components
import ContactForm from './ContactForm';

class Contact extends Component{

    render(){

        return(
            <motion.div
                className="align-items-center"
                initial="out"
                animate="in" 
                exit="out"
                variants={this.props.pageVariant}
            >
                <ContactForm />
            </ motion.div>
        )
    }
}

export default Contact;