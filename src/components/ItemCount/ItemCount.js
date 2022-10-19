
import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import "./ItemCount.css";

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const decrease = () =>{
        setCount(count - 1);
    }
    const increase = () =>{
        setCount(count + 1);
    }
    useEffect(() => {
        setCount(parseInt(initial))
    }, [initial])

    return ( 
        <div className="counter" >
            <button className="buttonCounterDec" disabled={count <= 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button className="buttonCounterInc" disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <Button disabled={stock <= 0} onClick={() => onAdd(count)} variant="success">Agregar al carrito</Button>
            </div>
        </div>
     );
}
 
export default ItemCount;