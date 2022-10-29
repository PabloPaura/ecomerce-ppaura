import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { CartContextProvider } from "./Context/CartContext";
import { useEffect } from "react";
import {collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore';
import { createAllProducts } from "./utils/products";
 

function App() {
  //Funcion para llamar mis productos y almacenarlos en Firebase. (Solo la utiñlizo una vez)
  // useEffect(() => {
  //   createAllProducts()
  // }, [])
  return (
    <>
      <BrowserRouter basename="/ecomerce-ppaura" >
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a nuestra tienda"} />}/>
          <Route path="/category/:categoryName" element={<ItemListContainer greeting={"Bienvenidos a nuestra tienda"} />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
