import { Button, Modal, Form, Alert, Container,  } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";
import { useContext, useState } from "react";
import { createOrder } from "../utils/orders";

const OrderModal = ({ showModal, onClose }) => {
  const { cartList,total } = useContext(CartContext);


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
    console.log(newOrder);
  };
  return (
    <Container>
      <Container>

      </Container>
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
          <Alert variant="success">
            Su nro de orden es: {order}. Gracias por su compra!
          </Alert>
        ) : (
          <Button variant="primary" disabled={ inputName && inputPhone && inputMail && inputMail2? false : true} onClick={handleBuy}>
            Comprar
          </Button>
        )}

        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
    </Container>
  );
};

export default OrderModal;
