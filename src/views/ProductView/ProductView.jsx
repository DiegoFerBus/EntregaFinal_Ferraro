// src/views/ProductView/ProductView.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock';

export default function ProductView() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    
    const fetchProduct = async () => {
      const productData = await getProduct(id);
      setProduct(productData);
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Cargando producto...</p>;
  }

  return (
    <>
      <article style={{ border: '1px solid white', padding: 40 }}>
        <h2>Detalles del producto</h2>
        <h4>
          {product.title} - {product.category}
        </h4>
        <img src={product.image} alt={product.title} />
        <p>Description: {product.description}</p>
        <p>$ {product.price}</p>
      </article>
    </>
  );
}
