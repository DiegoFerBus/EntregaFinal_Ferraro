import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <>
      <article style={{ border: '1px solid white', padding: 10 }}>
        <h4>{product.title}</h4>
        <img src={product.image} alt={product.title} />
        <p>$ {product.price}</p>
        <Link to={`/product/${product.id}`}>
          <button type="button" className="btn btn-secondary">Detalles</button>
        </Link>
      </article>
    </>
  );
}
