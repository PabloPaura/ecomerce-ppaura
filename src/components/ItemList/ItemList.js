import Item from "../Item/Item";
import Container from "react-bootstrap/Container";
import './ItemList.css';
import Stack from 'react-bootstrap/Stack';

const ItemList = ({ productos }) => {
  return (
    <div className="itemList" >  
      {productos.map((product) => {
          return <Item key={product.id} product={product} />;
        })}      
    </div>
  );
};

export default ItemList;
