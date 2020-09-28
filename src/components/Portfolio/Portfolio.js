// Reacto
import React, {Component} from 'react';

// Styling
import { motion } from 'framer-motion';

// Components
import GithubProfile from './GithubProfile';
import PinnedRepositories from './PinnedRepositories';
import { Container } from 'react-bootstrap';

class Portfolio extends Component{
    render(){
        console.log("Portfolio");

        return(
            <motion.div
                initial="out"
                animate="in" 
                exit="out"
                variants={this.props.pageVariant}
            >
                <Container className="d-flex justify-content-center">
                    <GithubProfile classname="row"/>
                    <PinnedRepositories className="row"/>
                </Container>

            </motion.div>

        )
    }
}

export default Portfolio;