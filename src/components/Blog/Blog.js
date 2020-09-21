// Reacto
import React, { Component } from 'react';

// Styling
import { motion } from 'framer-motion';
import {  Container, Row } from 'react-bootstrap';

// Componentes
import { medium_article_grab } from '../../assets/FetchRequests/MediumFetch';
import BlogCards from './BlogCards';

class Blog extends Component{
    state = {
        mediumData: {}
    }

    componentDidMount(){
        medium_article_grab(this);
    }

    render(){
        const { feed, items } = this.state.mediumData
        // console.log(this.state.mediumData)
        // console.log(feed)
        // console.log(items)

        return(
            <motion.div
                initial="out"
                animate="in" 
                exit="out"
                variants={this.props.pageVariant}
            >   
                <Container className="mt-5">  
                    {feed ?
                        <Row className="text-center justify-content-center">
                            <a href={feed.link}><img src={feed.image} alt="Medium" /></a>
                            <h1>{feed.title}.com</h1>
                        </Row>
                    : ''}

                    {items ?
                        <Row>
                            {items.map((value, index) => {
                                    return <BlogCards key={index} value={value} index={index} />
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