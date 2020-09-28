// Reacto
import React, {Component} from 'react';
import { motion } from 'framer-motion';

class Home extends Component{

    render(){
        console.log("Home")

        return(
            <motion.div
                delay="3.2"
                initial="out"
                animate="in" 
                exit="out"
                variants={this.props.pageVariant}
                className="d-flex justify-content-center mt-5"
            >
                <p>Welcome to my site.</p>
            </motion.div>
        )
    }
}

export default Home;