// Reacto
import React, {Component} from 'react';

// Styling
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';

// Components
import GithubProfile from './GithubProfile';
import PinnedRepositories from './PinnedRepositories';

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
                <Container className="d-flex justify-content-center">
                    <GithubProfile className="col" />
                    <PinnedRepositories className="col" />
                </Container>

            </motion.div>

        )
    }
}

export default Portfolio;