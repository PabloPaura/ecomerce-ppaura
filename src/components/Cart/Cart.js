import { Container, Button, Card} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import OrderModal from "../OrderModal";

const Cart = () => {
  const { cartList, removeItem, clear, total } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  return (
    <Container>
      <h1>Carrito de compras</h1>
      <Container>
        {cartList.map((product) => {
          return (
            <Card key={product.id}>
              <Card.Img src={product.image} />
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>Precio ${product.price}</Card.Text>
              <span>Cantidad: {product.quantity}</span>
              <Button
                className="cartButton"
                variant="danger"
                onClick={() => removeItem(product.id)}
              >
                <FaTrash />
              </Button>
            </Card>
          );
        })}
      </Container>
      {cartList.length > 0 && (
        <>
          <h3>Total de la compra: $ {total}</h3>
          <Button className="cartButton" onClick={() => clear()}>
            Vaciar Carrito
          </Button>
          <Button variant="success" onClick={handleOpen}>
            Finalizar compra
          </Button>
        </>
      )}
      {cartList.length === 0 && (
        <>
          <h3>Carrito de compras vacío</h3>
          <Link to="/">
            <Button variant="success">Ver más productos</Button>
          </Link>
        </>
      )}
      <OrderModal showModal={showModal} onClose={handleClose} />
    </Container>
  );
};

export default Cart;
