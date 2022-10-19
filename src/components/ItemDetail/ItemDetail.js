import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Card, Container, Button } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const {addToCart} = useContext(CartContext);
  const handleClick = (number) =>{
    onAdd(number)
    addToCart(product, number)
  }

  function onAdd(quantity) {
    setQuantity(quantity);
  }
  return (
    <>
      <Card className="itemDetail__card">
        <Card.Header>{product.category}</Card.Header>
        <Card.Body className="itemDetail__body">
          <Card.Img src={product.image} />
          <Container className="flex-column">
            <Container>
              <Card.Title className="text--uppercase">
                {product.title}
              </Card.Title>
              <Card.Text className="text--large">
                {product.description}
              </Card.Text>
            </Container>
            <Container className="flex-row">
              {quantity === 0 ? (
                <ItemCount
                  stock={5}
                  initial={0}
                  onAdd={handleClick}
                />
              ) : (
                <Link to="/Cart">
                   <Button variant="success">Finalizar compra</Button>
                </Link>
              )}
            </Container>
          </Container>
        </Card.Body>
        <Card.Footer className="text-muted">En stock</Card.Footer>
      </Card>
    </>
  );
};

export default ItemDetail;
