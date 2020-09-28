// Reacto
import React from 'react';

// Styling
import {Card, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';

// Components
import { pubDatePrep } from './TimeToString';

export default function BlogCards(props){
    // Destructure props into something readable
    const { value, index } = props;

    return(
        // Card Major 
        <Card key={index} className="border border-secondary m-3 p-3">
            {/* Blog Title */}
            <Card.Title href={value.link} className="text-center border-bottom"><Card.Link href={value.link}>{value.title}</Card.Link></Card.Title>
            
            {/* Blog Image */}
            <Card.Link href={value.link} className="d-inline-flex justify-content-center"><Card.Img src={value.thumbnail} alt={`Post #${index}`} className="w-75 m-4" /></Card.Link>
            
            {/* Blog Information */}
            <Card.Body className="border-bottom border-top d-flex justify-content-center">
                <Row>
                    {/* Published Date */}
                    <Col className="border-right d-flex justify-content-center">
                        <Card.Text>Released On {pubDatePrep(value.pubDate)}</Card.Text>
                    </Col>

                    {/* Publisher */}
                    <Col className="border-left">
                        <Card.Text className="mr-auto ml-5"> By {value.author} </Card.Text>
                    </Col>
                </Row>
            </Card.Body>

            {/* Categories */}
            <ListGroup key={index} className="mb-4 mt-4 border-0 d-flex justify-content-center" horizontal>
                <Card.Text className="h2 mt-4 mr-3"> Categories: </Card.Text>
                {/* {CategoriesList(value.categories)} */}
                <CategoriesList categories={value.categories} />
            </ListGroup>
            
        </Card>
    )
}

function CategoriesList(props){
    return props.categories.map((category) => 
     <ListGroupItem key={category} className='mt-4'>{category}</ListGroupItem>
    )
}

