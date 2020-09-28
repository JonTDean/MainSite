// Reacto
import React, { Component } from 'react';

// Styling
import { motion } from 'framer-motion';
import {  Container, Row } from 'react-bootstrap';

// Components
import { medium_article_grab } from '../../assets/FetchRequests/MediumFetch';
import BlogCards from './BlogCards';
import LoadPoint from '../Static/Loader/LoadPoint';

class Blog extends Component{
    state = {
        mediumData: {}
    }

    componentDidMount(){
        medium_article_grab(this);
    }
    
    render(){
        const { feed, items } = this.state.mediumData
        return(
            <motion.div
                initial="out"
                animate="in" 
                exit="out"
                variants={this.props.pageVariant}
            >   
                <Container className="mt-5" style={{'maxHeight': 'calc(100vh - 160px)', 'overflowY': 'auto'}}>  
                    {feed ?
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <Row className="text-center justify-content-center">
                                <a href={feed.link}>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                   <img src={feed.image} alt="Medium" />
                                    </motion.div>                                        exit={{ opacity: 0 }}
                                    >
                     
                                </a>
                                <h1>{feed.title}.com</h1>
                            </Row>
                        </motion.div>
                    : ''}

                    {items ?
                        <Row>
                            {items.map((value, index) => {
                                    return(
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <BlogCards key={index} value={value} index={index} />
                                        </motion.div>
                                    ) 
                                })
                            }
                        </Row>
                    : ''}
                </Container>
            </motion.div>
        )
    }

}

export default Blog;