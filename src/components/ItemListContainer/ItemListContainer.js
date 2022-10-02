import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Container from "react-bootstrap/Container";
import React, { useState, useEffect } from "react";
import { getProducts } from "../../utils/products";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const { categoryName } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => setProductos(data))
      .catch((error) => console.warn(error));
  }, [categoryName]);
  return (
    <Container>
      <h1>Nuestros productos</h1>
      <h3 className="greeting">{greeting}</h3>
      <ItemList productos={productos} />
    </Container>
  );
};

export default ItemListContainer;
