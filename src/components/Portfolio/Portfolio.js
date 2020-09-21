// Reacto
import React, {Component} from 'react';

// Styling
import { motion } from 'framer-motion';
import { Container, Carousel } from 'react-bootstrap';

// Libraries
// Components

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
                <Container className="mt-5" style={{backgroundColor: "black"}}>

                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 h-100"
                            // src="holder.js/800x400?text=First slide&bg=373940"
                            src='https://i.guim.co.uk/img/media/d143e03bccd1150ef52b8b6abd7f3e46885ea1b3/0_182_5472_3283/master/5472.jpg?width=1200&quality=85&auto=format&fit=max&s=d5a74a011c3fef1ad9c1c962721d221d'
                            // alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </motion.div>

        )
    }
}

export default Portfolio;