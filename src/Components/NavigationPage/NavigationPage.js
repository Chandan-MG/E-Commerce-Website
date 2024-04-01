import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {Outlet} from 'react-router-dom';
import { Link } from 'react-router-dom';
import './NavigationPage.css';

const NavigationPage =()=>{
    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container className="justify-content-center">
                    <Nav >
                        <Nav.Link as={Link} to="/" className="nav-link">HOME</Nav.Link>
                        <Nav.Link as={Link} to="/store" className="nav-link">STORE</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="nav-link">ABOUT</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}
export default NavigationPage;