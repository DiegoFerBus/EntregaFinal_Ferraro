import { Link } from 'react-router-dom';
import './ItemList.css';
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';

export default function ItemList({ products }) {
  const { addItemToCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState({}); // Para almacenar la cantidad de cada producto

  if (!products || products.length === 0) {
    return <p>Cargando productos....</p>;
  }

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1; // Obtener la cantidad, o 1 si no está definida
    addItemToCart(product, quantity);
    setQuantities({ ...quantities, [product.id]: 1 }); // Resetear cantidad después de agregar al carrito
  };

  return (
    <div className="products-list">
      {products.map((product) => {
        return (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>${product.price}</p>

            <div className="quantity-selector">
              <button 
                className="btn btn-secondary" 
                onClick={() => setQuantities({
                  ...quantities,
                  [product.id]: Math.max((quantities[product.id] || 1) - 1, 1) // No permitir que la cantidad sea menor que 1
                })}
              >
                -
              </button>
              <span>{quantities[product.id] || 1}</span>
              <button 
                className="btn btn-secondary" 
                onClick={() => setQuantities({
                  ...quantities,
                  [product.id]: (quantities[product.id] || 1) + 1 // Incrementar cantidad
                })}
              >
                +
              </button>
            </div>

            <Link to={`/product/${product.id}`}>
              <button className="btn btn-dark">Ver Detalles</button>
            </Link>
            
            <button 
              className="btn btn-success m-2" 
              onClick={() => handleAddToCart(product)}
            >
              Agregar al carrito
            </button>
          </div>
        );
      })}
    </div>
  );
}
