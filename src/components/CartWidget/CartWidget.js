import { AiOutlineShoppingCart } from "react-icons/ai";
import "./CartWidget.css";
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <>
      <Link to='/cart'>
        <AiOutlineShoppingCart />
      </Link>
      <>CartWidget</>
    </>
  );
};

export default CartWidget;
