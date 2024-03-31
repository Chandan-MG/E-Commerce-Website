
import './App.css';
import ProductList from './Components/Products/ProductList';
import { useState } from 'react';
// import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Cart from './Components/Cart/Cart';
import CartContextProvider, {CartContext} from './Components/Context/Cart-context';
import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';
import Main from './Components/Main/Main';


function App() {
  
  return (
    <CartContextProvider>
      <Container fluid>
        <Row style={{padding:"20px"}}>
          <Header />
        </Row>
        <Row className="App">
          <Main />
        </Row>
        <Cart />
      </Container>
    </CartContextProvider>
  );
}

export default App;
