import React, { useState } from "react";
import HomePage from "./HomePage";
import { Button, Col, Container, Row } from "react-bootstrap";
import './Tours.css';

const ToursList = [

    {
      date: '29 Jan',
      country: 'DETROIT, MI',
      place: 'DTE ENERGY MUSIC THEATRE',
    },
    {
        date: '30 Jan',
        country: 'TORONTO,ON',
        place: 'BUDWEISER STAGE',
    },
    {
        date: '31 Jan',
        country: 'LAS VEGAS, NV',
        place: 'T-MOBILE ARENA',
    },
]

const Tours =()=>{
    const [tours, setTour] = useState(ToursList);
    return(
        <Container>
            {tours.map((tour, index) => (
                    <Row key={index} className="tour-row">
                        <Col><span>{tour.date}</span></Col>
                        <Col><span>{tour.country}</span></Col>
                        <Col><span>{tour.place}</span></Col>
                        <Col><Button variant="primary">BUY TICKETS</Button></Col>
                    </Row>
            ))}
        </Container>
    )
}

export default Tours;