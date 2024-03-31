
import './App.css';
import ProductList from './Components/Products/ProductList';
import { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cart from './Components/Cart/Cart';
import CartContextProvider, {CartContext} from './Components/Context/Cart-context';
// import Header from './Components/Header/Header';

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
  const cartCtx = useContext(CartContext);
  const [products, setProducts] = useState(productsArr);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <CartContextProvider>
      <Container fluid>
        <Row style={{padding:"20px"}}>
          <Col className="d-flex justify-content-end"><Button variant="dark" onClick={handleShowModal}>Cart ({cartCtx.cartItems.length})</Button></Col>
        </Row>
        <Row className="App">
          <ProductList products={products} />
        </Row>
        <Cart closeModal={handleCloseModal} showModal={showModal} />
      </Container>
    </CartContextProvider>
  );
}

export default App;
