// Reacto
import React, {Component} from 'react';
import { motion } from 'framer-motion';

class Portfolio extends Component{
    render(){
        console.log("Portfolio")

        return(
            <motion.div
                initial="out"
                animate="in" 
                exit="out"
                variants={this.props.pageVariant}
            >
                <p>PORTFOLIO PAGE!</p>
                <p>Link Github Account Here</p>
                <p>Also have your portfolio show off your work directly in the browser, maybe via {"<Iframes>"}?</p>
            </motion.div>

        )
    }
}

export default Portfolio;