// src/views/ProductsView/ProductsView.jsx
import { useEffect, useState } from 'react';
import { getProducts, getCategory } from '../../asyncMock';
import ProductsList from '../../components/ProductsList';

export default function ProductsView({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      // Si hay una categoría, filtrar productos
      getCategory(category).then((data) => {
        setProducts(data);
      });
    } else {
      // Si no hay categoría, obtener todos los productos
      getProducts.then((data) => {
        setProducts(data);
      });
    }
  }, [category]);

  return (
    <div>
      <h2>{category ? `${category}` : 'Todos los Productos'}</h2>
      <ProductsList products={products} />
    </div>
  );
}

