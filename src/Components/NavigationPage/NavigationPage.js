import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {Outlet} from 'react-router-dom';
import { Link } from 'react-router-dom';
import './NavigationPage.css';

const NavigationPage =()=>{
    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/store">Store</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}
export default NavigationPage;