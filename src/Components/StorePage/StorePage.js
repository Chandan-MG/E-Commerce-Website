import React, { useContext } from "react";
import CartContextProvider from "./Context/Cart-context";
import { Container, Row } from "react-bootstrap";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import AuthContext from "../AuthPage/Auth-Context";

const StorePage = () => {
    const ctx = useContext(AuthContext);
    return(
        <CartContextProvider>
            <Container fluid>
                <Row style={{padding:"20px"}}>
                    <Header />
                </Row>
                <Row >
                    <Main/>
                </Row>
                <Footer />
            </Container>
        </CartContextProvider>
    )
}

export default StorePage;