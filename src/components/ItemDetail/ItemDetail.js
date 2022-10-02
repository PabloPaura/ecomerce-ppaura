import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const ItemDetail = ({ data }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.descroption}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{data.price}</ListGroup.Item>
        <ListGroup.Item>{data.category}</ListGroup.Item>
        <ListGroup.Item>{data.count}</ListGroup.Item>
      </ListGroup>
      <Button variant="primary">Agregar al carrito</Button>
    </Card>
  );
};

export default ItemDetail;
