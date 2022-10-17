import {Container, Button, Card} from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";


const Cart = () => {
  const { cartList, removeItem, clear } = useContext(CartContext);
  return (
    <Container>
      <h1>Carrito de compras</h1>
      <Container>
        {cartList.map((product) => {
          return (
            <Card key={product.id}>
              <Card.Img src={product.image} />
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>${product.price}</Card.Text>
              <span>{product.quantity}</span>
              <Button onClick={() => removeItem(product.id)}>X</Button>
            </Card>
          );
        })}
      </Container>
      <Button onClick={() => clear()}>Vaciar Carrito</Button>
    </Container>
  );
};

export default Cart;
