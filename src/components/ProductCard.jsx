import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';

export default function ProductCard({ product }) {
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const itemToAdd = {
      id: product.id,
      name: product.title, 
      price: product.price,
      quantity: 1,
    };
    addItemToCart(itemToAdd, 1);
  };

  return (
    <>
      <article style={{ border: '1px solid white', padding: 10 }}>
        <h4>{product.title}</h4>
        <img src={product.image} alt={product.title} />
        <p>$ {product.price}</p>
        <Link to={`/product/${product.id}`}>
          <button type="button" className="btn btn-secondary">Detalles</button>
        </Link>
        
        <button type="button" className="btn btn-primary" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </article>
    </>
  );
}
