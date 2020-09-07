// Reacto
import React, {Component} from 'react';
import { motion } from 'framer-motion';

class Home extends Component{

    render(){
        console.log("Home")

        return(
            <motion.div
                initial="out"
                animate="in" 
                exit="out"
                variants={this.props.pageVariant}
            >
                <p>HOME PAGE!</p>
            </motion.div>
        )
    }
}

export default Home;