// Reacto
import React, {Component} from 'react';
import { motion } from 'framer-motion';

class Blog extends Component{
    render(){
        console.log("Blog")

        return(
            <motion.div
                initial="out"
                animate="in" 
                exit="out"
                variants={this.props.pageVariant}
            >
                <p>BLOG PAGE!</p>
                <p>Remember to connect your medium account here Via the Medium API.</p>
                <p><a href="https://github.com/Medium/medium-api-docs">Link here</a></p> 
            </motion.div>
        )
    }
}

export default Blog;