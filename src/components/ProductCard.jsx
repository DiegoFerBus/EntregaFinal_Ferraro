import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext'; // Importar el contexto del carrito

export default function ProductCard({ product }) {
  const { addItemToCart } = useContext(CartContext); // Obtener la función para agregar al carrito

  const handleAddToCart = () => {
    const itemToAdd = {
      id: product.id,
      name: product.title,  // Usar 'title' ya que así lo tienes definido
      price: product.price,
      quantity: 1,  // Puedes ajustar la cantidad según sea necesario
    };
    addItemToCart(itemToAdd, 1);  // Agregar el producto al carrito
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
        {/* Agregar botón para añadir al carrito */}
        <button type="button" className="btn btn-primary" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </article>
    </>
  );
}
