import "./Item.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" className="card__img" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <h4>Precio: $ {product.price}</h4>
          <h4>Categoría: {product.category}</h4>
          <Link to={`/item/${product.id}`}>
            <Button variant="secondary">Ver detalle</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
