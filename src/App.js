
import './App.css';
import ProductList from './Components/Products/ProductList';
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cart from './Components/Cart/Cart';

const productsArr = [

  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }  
]

function App() {

  const [products, setProducts] = useState(productsArr);
  const [isOpen, setIsOpen] = useState(false);

  const cartButtonHandler = () =>{
    setIsOpen(true);
  }
  return (
    <Container fluid>
      <Row>
        <Col><Button variant="primary" onClick={cartButtonHandler}>Cart</Button></Col>
      </Row>
      {/* <Row className="App">
        <ProductList products={products} />
      </Row> */}
      <Row>
        {isOpen && <Cart />}
      </Row>
    </Container>
  );
}

export default App;
