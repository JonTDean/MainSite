// Reacto
import React, {Component} from 'react';

// Styling
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';

// Components
import GithubProfile from './GithubProfile';
import PinnedRepositories from './PinnedRepositories';
import LoadPoint from '../Static/Loader/LoadPoint';

class Portfolio extends Component{
    
    render(){
        console.log("Portfolio")
        return(
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <Container className="d-flex justify-content-center">
                        <GithubProfile className="col" />
                        <PinnedRepositories variants={this.props.pageVariant} className="col w-25" />
                </Container>
            </motion.div>
        )
    }
}

export default Portfolio;