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
import getFiirestore, { getDoc } from 'firebase/firestore';
import {doc, getFirestore} from 'firebase/firestore';
import swal from 'sweetalert';

function App() {
  useEffect(() => {
    const database = getFirestore();

    const itemReference = doc(database, 'items', 'V7IxtmsxHgcH1ro98c2X');

    getDoc(itemReference)
      .then((snapshot) => {
        if(snapshot.exists()){
          const item = {
            id: snapshot.id,
            ...snapshot.data
          };
          console.log(item);
        }
      })
      .catch(error => console.warn(error));

  }, []);


  return (
    <>
      <BrowserRouter>
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
