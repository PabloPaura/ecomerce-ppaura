import { Button, Modal, Form, Alert, Container, Card } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";
import { useContext, useState } from "react";
import { createOrder } from "../utils/orders";
import { Link } from "react-router-dom";

const OrderModal = ({ showModal, onClose }) => {
  const { cartList, total } = useContext(CartContext);

  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputMail, setInputMail] = useState("");
  const [inputMail2, setInputmail2] = useState("");

  const userInputs = {
    name: inputName,
    phone: inputPhone,
    mail: inputMail,
  };

  const [order, setOrder] = useState();

  const handleBuy = async () => {
    const newOrder = {
      buyer: userInputs,
      items: cartList,
      total,
    };

    const order = await createOrder(newOrder);
    setOrder(order);
    
  };
  return (
    <Container>
      <Modal show={showModal} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Finalizar compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su nombre"
              onChange={(event) => setInputName(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su teléfono"
              onChange={(event) => setInputPhone(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su email"
              onChange={(event) => setInputMail(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="Re ingrese email"
              placeholder="Re ingrese su email"
              onChange={(event) => setInputmail2(event.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          {order ? (
            <>
              <Alert variant="success">Orden N°: {order}</Alert>
              <div>
                <Link to="/">
                  <Button variant="success">Volver a comprar</Button>
                </Link>
              </div>
              <div>
                <h2>Mis productos</h2>
                {cartList.map((product) => {
                  return (
                    <>
                      <Card key={product.id}>
                        <Card.Text>{product.title}</Card.Text>
                        <Card.Text>Precio ${product.price}</Card.Text>
                        <span>Cantidad: {product.quantity}</span>
                      </Card>
                    </>
                  );
                })}
                <span>Total de su compra; ${total}</span>
              </div>
            </>
          ) : (
            <>
              <Button
                variant="primary"
                disabled={
                  inputName && inputPhone && inputMail && inputMail2
                    ? false
                    : true
                }
                onClick={handleBuy}
              >
                Comprar
              </Button>
              <Button variant="secondary" onClick={onClose}>
                Cancelar
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default OrderModal;
