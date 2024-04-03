import React from "react";
import { Button, Col, Row } from "react-bootstrap";
// import {Outlet} from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './HomePage.css';
import Tours from "./Tours";

const HomePage =(props)=>{
    return(
        <>
            <Row className="first-row">
                <Row>
                    <Col className="text-center">
                        <span className="generics-header">The Generics</span>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Button variant="outline-info" className="album-button"><span>Get our Latest Album</span></Button>
                    </Col>
                </Row>
            </Row>
            <Row>
                <Col className="text-center">
                    <span className="tours-text">TOURS</span>
                </Col>
            </Row>
            <Row>
                <Col className="text-center" >
                    <Tours/>
                </Col>
            </Row>
        </>
    )
}
export default HomePage;