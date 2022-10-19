import { AiOutlineShoppingCart } from "react-icons/ai";
import "./CartWidget.css";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Badge } from 'react-bootstrap';

const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext);
  return (
    <>
      <Link to='/cart'>
        <AiOutlineShoppingCart />
      </Link>
      {totalQuantity > 0 && (
        <Badge pill bg="danger">{totalQuantity}</Badge>
      )}
    </>
  );
};

export default CartWidget;
