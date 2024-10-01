// src/components/ProductsList.jsx
import { Link } from 'react-router-dom';
import './ProductsList.css';

export default function ProductsList({ products }) {
  return (
    <div className="products-list">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>
              <button className="btn btn-dark">Ver Detalles</button>
            </Link>
          </div>
        ))
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
}
