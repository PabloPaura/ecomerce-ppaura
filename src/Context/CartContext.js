import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const addToCart = (product, cantidad) => {
    if (isInCart(product.id)) {
      alert("Tu producto ya se encuentra en el carrito");
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
  const data = {
    addToCart,
    removeItem,
    clear,
    cartList,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};  
