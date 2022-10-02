import './Item.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({product}) => {
    return ( 
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <h4>Precio: $ {product.price}</h4>
          <h4>Categoría:  {product.category}</h4>
          <Button variant="primary">Ver producto</Button>
        </Card.Body>
      </Card>
     );
}
 
export default Item;