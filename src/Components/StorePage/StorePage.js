import React from "react";
import CartContextProvider from "./Context/Cart-context";
import { Container, Row } from "react-bootstrap";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";

const StorePage = () => {
    return(
        <CartContextProvider>
            <Container fluid>
                <Row style={{padding:"20px"}}>
                    <Header />
                </Row>
                <Row >
                    <Main />
                </Row>
                <Footer />
            </Container>
        </CartContextProvider>
    )
}

export default StorePage;