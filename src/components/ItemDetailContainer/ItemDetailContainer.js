import { getProduct } from "../../utils/products";
import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id} = useParams();
  console.log(id)
  const [product, setProduct] = useState({});
  useEffect(() => {
    getProduct(1)
      .then((data) => setProduct(data))
      .catch((error) => console.warn(error));
  }, [id]);

  return <ItemDetail data={product} />;
};

export default ItemDetailContainer;
