import Item from '../Item/Item';

const ItemList = ({products}) => {
    return ( 
        <>
        <h1>ItemList</h1>
        {products.map((product) => {
            <Item key={product.id} product={product} />
        })}
        </>
     );
}
 
export default ItemList;