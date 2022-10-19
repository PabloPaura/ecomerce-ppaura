import { createContext, useState } from "react";
import swal from 'sweetalert';

export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const addToCart = (product, cantidad) => {
    if (isInCart(product.id)) {
      swal({
        title:  "Tu producto ya se encuentra en el carrito",
        icon: "warning",
        button: "Aceptar",
      });
    } else {
      cartList.push({
        ...product,
        quantity: cantidad,
      });
      setCartList([...cartList]);
    }
  };

  const isInCart = (id) => {
    return cartList.some((product) => product.id === id);
  };

  const removeItem = (id) => {
    setCartList(cartList.filter((product) => product.id !== id));
  };

  const clear = () => {
    setCartList([]);
  };

 let total = 0;
 cartList.forEach((product)=> {
  total += product.price * product.quantity
 }); 

 const totalQuantity = cartList.reduce((count, product) => count + product.quantity, 0); 

  const data = {
    addToCart,
    removeItem,
    clear,
    cartList,
    total,
    totalQuantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};  
