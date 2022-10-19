import {Container, Button, Card} from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
  const { cartList, removeItem, clear, total } = useContext(CartContext);
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
              {/* <Button onClick={() => removeItem(product.id)}>X</Button> */}
              <Button variant="danger" onClick={() => removeItem(product.id)}>X</Button>
            </Card>
          );
        })}
      </Container>
      {cartList.length > 0 && (
      <>
      <h3>Total de la compra: $ {total}</h3>
      <Button onClick={() => clear()}>Vaciar Carrito</Button>
      </>
      )}
      {cartList.length === 0 && (
        <>
      <h3>Carrito de compras vacío</h3>
      <Link to='/'>      
        <Button variant="success">Ver más productos</Button>
      </Link>
        </>
      )}
    </Container>
  );
};

export default Cart;
